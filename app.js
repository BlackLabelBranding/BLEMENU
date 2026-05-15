const SUPABASE_URL = "";
const SUPABASE_PUBLISHABLE_KEY = "";
const SUPABASE_TABLE = "blemenu_form_submissions";
const SUPABASE_PUBLIC_FEED = "blemenu_form_submission_public";

const state = {
  configured: false,
};

function isConfigured() {
  return Boolean(SUPABASE_URL && SUPABASE_PUBLISHABLE_KEY);
}

function buildHeaders() {
  return {
    apikey: SUPABASE_PUBLISHABLE_KEY,
    Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
    "Content-Type": "application/json",
  };
}

function setStatus(message, tone) {
  const statusNode = document.getElementById("form-status");
  statusNode.textContent = message;
  statusNode.classList.toggle("is-error", tone === "error");
}

function setConnectionPill(message, isLive) {
  const pill = document.getElementById("connection-pill");
  pill.textContent = message;
  pill.classList.toggle("is-live", isLive);
}

function formatTimestamp(value) {
  if (!value) {
    return "Just now";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "Just now";
  }

  return date.toLocaleString();
}

function renderRecentSubmissions(rows) {
  const root = document.getElementById("recent-submissions");
  root.replaceChildren();

  if (!rows.length) {
    const emptyNode = document.createElement("p");
    emptyNode.className = "empty-feed";
    emptyNode.textContent = "No submissions have landed in Supabase yet.";
    root.appendChild(emptyNode);
    return;
  }

  rows.forEach((row) => {
    const card = document.createElement("article");
    card.className = "feed-item";

    const title = document.createElement("p");
    title.className = "feed-item-title";
    title.textContent = row.item_name || "Untitled item";

    const meta = document.createElement("p");
    meta.className = "feed-item-meta";
    meta.textContent = `${row.venue_name || "Unknown venue"} | ${row.menu_section || "No section"} | ${formatTimestamp(row.created_at)}`;

    card.appendChild(title);
    card.appendChild(meta);
    root.appendChild(card);
  });
}

async function fetchRecentSubmissions() {
  if (!state.configured) {
    return;
  }

  const query = new URLSearchParams({
    select: "venue_name,menu_section,item_name,created_at",
    order: "created_at.desc",
    limit: "6",
  });

  const response = await fetch(`${SUPABASE_URL}/rest/v1/${SUPABASE_PUBLIC_FEED}?${query.toString()}`, {
    method: "GET",
    headers: buildHeaders(),
  });

  if (!response.ok) {
    throw new Error("Unable to load recent submissions.");
  }

  const rows = await response.json();
  renderRecentSubmissions(Array.isArray(rows) ? rows : []);
}

function getFormPayload(form) {
  const formData = new FormData(form);

  return {
    venue_name: String(formData.get("venue_name") || "").trim(),
    menu_section: String(formData.get("menu_section") || "").trim(),
    contact_name: String(formData.get("contact_name") || "").trim(),
    contact_email: String(formData.get("contact_email") || "").trim(),
    contact_phone: String(formData.get("contact_phone") || "").trim(),
    submission_source: String(formData.get("submission_source") || "").trim(),
    item_name: String(formData.get("item_name") || "").trim(),
    item_description: String(formData.get("item_description") || "").trim(),
    dietary_notes: String(formData.get("dietary_notes") || "").trim(),
    handoff_notes: String(formData.get("handoff_notes") || "").trim(),
  };
}

async function submitForm(event) {
  event.preventDefault();

  if (!state.configured) {
    setStatus("Add the Supabase URL and publishable key in app.js before submitting.", "error");
    return;
  }

  const form = event.currentTarget;
  const button = document.getElementById("submit-button");
  const payload = getFormPayload(form);

  button.disabled = true;
  setStatus("Sending submission to Supabase...");

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/${SUPABASE_TABLE}`, {
      method: "POST",
      headers: {
        ...buildHeaders(),
        Prefer: "return=minimal",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Supabase rejected the submission.");
    }

    form.reset();
    document.getElementById("submission-source").value = "github-static-intake";
    setStatus("Submission sent to Supabase.");
    await fetchRecentSubmissions();
  } catch (error) {
    setStatus(error.message || "Something went wrong while sending the form.", "error");
  } finally {
    button.disabled = false;
  }
}

function initializeStaticState() {
  const form = document.getElementById("submission-form");
  state.configured = isConfigured();

  if (state.configured) {
    setConnectionPill("Supabase connected", true);
    setStatus("Connected to Supabase.");
    fetchRecentSubmissions().catch(() => {
      setStatus("Connected, but recent submissions could not be loaded.", "error");
    });
  } else {
    setConnectionPill("Supabase not configured yet", false);
    setStatus("Add the Supabase URL and publishable key in app.js before submitting.");
  }

  form.addEventListener("submit", submitForm);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeStaticState, { once: true });
} else {
  initializeStaticState();
}
