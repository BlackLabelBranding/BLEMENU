import { useState } from "react";

const menuGroups = [
  {
    title: "Appetizers",
    items: [
      "Chicken Tenders",
      "Hummus",
      "Dynamite Sticks",
      "Chicken Wings",
      "Shrimp Cocktail",
      "Shrimp Scampi",
      "Buffalo Style Shrimp",
      "Quesadilla",
      "Tenderloin Ravioli",
      "Dessert Springs",
    ],
  },
  {
    title: "Salads / Wraps",
    items: ["Buffalo Chicken", "Chicken Caesar", "House Salad"],
    secondaryTitle: "Entrees",
    secondaryItems: ["Madga Chicken", "Filet Mignon", "Surf and Turf", "NY Strip"],
  },
  {
    title: "Sides",
    items: [
      "Baked Potato",
      "Loaded Baked Potato",
      "Broccoli",
      "Pasta",
      "French Fries",
      "Truffle French Fries",
      "Seasonal Grilled Vegetables",
    ],
    secondaryTitle: "Pasta + Dessert",
    secondaryItems: [
      "Chicken Fettuccini",
      "Shrimp Sambuca",
      "Shrimp Scampi",
      "Brownie A La Mode",
      "Fried Cheesecake",
    ],
  },
];

const requestTypes = [
  "Pickup Order",
  "Game Day Order",
  "Catering Inquiry",
  "Large Group Request",
];

function App() {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const requiredFields = [
      ["name", "Name"],
      ["phone", "Phone"],
      ["email", "Email"],
      ["pickup_date", "Pickup Date"],
      ["pickup_time", "Pickup Time"],
      ["request_type", "Request Type"],
      ["items", "Menu Items and Quantities"],
    ];

    const missing = requiredFields.find(([key]) => {
      return !String(formData.get(key) || "").trim();
    });

    if (missing) {
      setStatus(`${missing[1]} is required.`);
      return;
    }

    const lines = [
      "New Klincher Order Request",
      "",
      `Name: ${formData.get("name")}`,
      `Phone: ${formData.get("phone")}`,
      `Email: ${formData.get("email")}`,
      `Request Type: ${formData.get("request_type")}`,
      `Pickup Date: ${formData.get("pickup_date")}`,
      `Pickup Time: ${formData.get("pickup_time")}`,
      "",
      "Menu Items and Quantities:",
      `${formData.get("items")}`,
      "",
      "Notes:",
      `${formData.get("notes") || "None"}`,
    ];

    const subject = encodeURIComponent(`Klincher Order Request - ${formData.get("name")}`);
    const body = encodeURIComponent(lines.join("\n"));

    window.location.href = `mailto:orders@klincher.local?subject=${subject}&body=${body}`;
    setStatus("Your email draft is ready. If nothing opened, check your default mail app.");
  }

  return (
    <div className="page-shell">
      <header className="hero" id="top">
        <div className="hero-overlay" />
        <nav className="site-nav">
          <a className="brand-mark" href="#top">
            Klincher
          </a>
          <div className="nav-links">
            <a href="#menu">Menu</a>
            <a href="#order">Order Form</a>
          </div>
        </nav>

        <div className="hero-grid">
          <section className="hero-copy">
            <p className="eyebrow">Game Day Kitchen</p>
            <h1>Klincher</h1>
            <p className="tagline">Eat Like You Play</p>
            <p className="hero-text">
              Big flavor, no fluff, and a one-page order request flow that gets straight
              to the point.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#order">
                Start Your Order
              </a>
              <a className="button button-secondary" href="#menu">
                See The Menu
              </a>
            </div>
          </section>

          <aside className="hero-panel">
            <p className="panel-kicker">Order Fast</p>
            <h2>Send your request in one form.</h2>
            <p>
              Pick your sections, tell us what you want, choose a pickup window, and
              send it over without hunting through a giant menu board.
            </p>
            <ul className="hero-points">
              <li>Clean one-page ordering</li>
              <li>Menu sections laid out clearly</li>
              <li>Built for phone and desktop</li>
            </ul>
          </aside>
        </div>
      </header>

      <main>
        <section className="menu-strip" id="menu">
          <div className="section-heading">
            <p className="eyebrow">Menu</p>
            <h2>What People Are Ordering</h2>
          </div>

          <div className="menu-columns">
            {menuGroups.map((group) => (
              <section className="menu-band" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="menu-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {group.secondaryTitle ? <h3>{group.secondaryTitle}</h3> : null}
                {group.secondaryItems ? (
                  <ul className="menu-list">
                    {group.secondaryItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </section>

        <section className="build-strip">
          <div className="build-copy">
            <p className="eyebrow">Custom</p>
            <h2>Build Your Own Burger or Chicken Sandwich</h2>
            <p>
              Dress it up with cheddar cheese, provolone, bacon, mushrooms, jalapenos,
              or banana peppers.
            </p>
          </div>
        </section>

        <section className="form-section" id="order">
          <div className="section-heading">
            <p className="eyebrow">Order Form</p>
            <h2>One Page. One Form. Done.</h2>
          </div>

          <div className="form-layout">
            <section className="form-intro">
              <h3>How this works</h3>
              <p>
                Fill out the request, list the items you want, and the form will draft
                the message for you in your email app so you can send it right away.
              </p>
              <ul className="info-list">
                <li>Use one form for pickup requests, game-day catering, or larger food orders.</li>
                <li>Include quantities in the item box exactly how you want them prepared.</li>
                <li>Everything is built around a fast, simple request flow.</li>
              </ul>
            </section>

            <form className="order-form" onSubmit={handleSubmit}>
              <div className="field-grid">
                <label className="field">
                  <span>Name</span>
                  <input type="text" name="name" autoComplete="name" required />
                </label>

                <label className="field">
                  <span>Phone</span>
                  <input type="tel" name="phone" autoComplete="tel" required />
                </label>

                <label className="field">
                  <span>Email</span>
                  <input type="email" name="email" autoComplete="email" required />
                </label>

                <label className="field">
                  <span>Pickup Date</span>
                  <input type="date" name="pickup_date" required />
                </label>

                <label className="field">
                  <span>Pickup Time</span>
                  <input type="time" name="pickup_time" required />
                </label>

                <label className="field">
                  <span>Request Type</span>
                  <select name="request_type" defaultValue="" required>
                    <option value="">Choose one</option>
                    {requestTypes.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="field">
                <span>Menu Items and Quantities</span>
                <textarea
                  name="items"
                  rows="7"
                  placeholder="Example: 2 Chicken Tenders, 1 House Salad, 1 order Truffle French Fries"
                  required
                />
              </label>

              <label className="field">
                <span>Notes</span>
                <textarea
                  name="notes"
                  rows="4"
                  placeholder="Add sauces, pickup details, allergies, or anything else we should know."
                />
              </label>

              <div className="form-actions">
                <button className="button button-primary" type="submit">
                  Draft My Order Email
                </button>
                <p className="form-status" role="status" aria-live="polite">
                  {status}
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Klincher</p>
        <a href="#order">Start Order</a>
      </footer>
    </div>
  );
}

export default App;
