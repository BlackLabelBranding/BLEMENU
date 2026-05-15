const menuData = [
  {
    id: "appetizers",
    label: "Appetizers",
    eyebrow: "Start loud",
    items: [
      {
        name: "Chicken Tenders",
        price: "$12",
        description:
          "Five tenders served with your choice of sauce. Upgrade to a platter with fries.",
        tags: ["Crowd favorite", "Shareable"],
      },
      {
        name: "Hummus",
        price: "$11",
        description:
          "Served with carrots, celery, cucumbers, broccoli, and warm flat bread.",
        tags: ["Vegetarian"],
      },
      {
        name: "Dynamite Sticks",
        price: "$12",
        description:
          "Phyllo dough stuffed with sauteed vegetables, fried until golden brown, and served with sweet red chili sauce.",
        tags: ["Crispy", "Vegetarian"],
      },
      {
        name: "Chicken Wings",
        price: "$15",
        description:
          "Choose plain, buffalo, or BBQ. Served with ranch or blue cheese and celery sticks.",
        tags: ["Game night", "Spicy option"],
      },
      {
        name: "Shrimp Cocktail",
        price: "$16",
        description: "Chilled jumbo shrimp served with cocktail sauce.",
        tags: ["Seafood"],
      },
      {
        name: "Shrimp Scampi",
        price: "$17",
        description:
          "Pan-seared shrimp in white sambuca cream sauce with tomato and mushrooms.",
        tags: ["Seafood", "Rich"],
      },
      {
        name: "Buffalo Style Shrimp",
        price: "$17",
        description:
          "Cajun seasoned, char-broiled, and smothered in house buffalo sauce with bleu cheese crumbles and ranch.",
        tags: ["Seafood", "Spicy"],
      },
      {
        name: "Quesadilla",
        price: "$13",
        description:
          "Cheddar, provolone, bell peppers, and red onions with salsa and sour cream. Add chicken or steak.",
        tags: ["Add protein"],
      },
      {
        name: "Tenderloin Ravioli",
        price: "$15",
        description: "Breaded four cheese ravioli served with marinara sauce.",
        tags: ["House special"],
      },
      {
        name: "Dessert Springs",
        price: "$10",
        description:
          "Phyllo dough dusted with cinnamon sugar and served with caramel sauce.",
        tags: ["Sweet start"],
      },
    ],
  },
  {
    id: "salads-wraps",
    label: "Salads / Wraps",
    eyebrow: "Fresh with edge",
    items: [
      {
        name: "Buffalo Chicken",
        price: "$16",
        description:
          "Cajun chicken over mixed greens with cheese, tomatoes, bacon bits, and spicy ranch.",
        tags: ["Wrap ready", "Spicy"],
      },
      {
        name: "Chicken Caesar",
        price: "$15",
        description:
          "Grilled or fried chicken over romaine, parmesan, croutons, and tangy caesar dressing.",
        tags: ["Wrap ready"],
      },
      {
        name: "House Salad",
        price: "$12",
        description:
          "Mixed greens with parmesan, provolone, bacon bits, green onions, and sweet Italian vinaigrette.",
        tags: ["Vegetarian option"],
      },
    ],
  },
  {
    id: "entrees",
    label: "Entrees",
    eyebrow: "Main event",
    items: [
      {
        name: "Madga Chicken",
        price: "$23",
        description:
          "Lightly breaded chicken topped with melted provolone, white wine mushroom sauce, and prosciutto.",
        tags: ["Signature"],
      },
      {
        name: "Filet Mignon",
        price: "$34",
        description: "8 oz grilled to perfection.",
        tags: ["Steak"],
      },
      {
        name: "Surf and Turf",
        price: "$36",
        description: "8 oz filet mignon paired with three jumbo shrimp.",
        tags: ["Steak", "Seafood"],
      },
      {
        name: "NY Strip",
        price: "$31",
        description: "12 oz grilled to perfection.",
        tags: ["Steak"],
      },
    ],
  },
  {
    id: "sides",
    label: "Sides",
    eyebrow: "Pick your backup",
    items: [
      {
        name: "Baked Potato",
        price: "$6",
        description: "Classic steakhouse side.",
        tags: ["Side"],
      },
      {
        name: "Loaded Baked Potato",
        price: "$8",
        description: "Finished with cheese, bacon, and sour cream.",
        tags: ["Side"],
      },
      {
        name: "Broccoli",
        price: "$6",
        description: "Simply seasoned greens.",
        tags: ["Vegetable"],
      },
      {
        name: "Pasta",
        price: "$7",
        description: "Butter-tossed pasta side.",
        tags: ["Side"],
      },
      {
        name: "French Fries",
        price: "$6",
        description: "Golden, salted, and ready for sauce.",
        tags: ["Crowd favorite"],
      },
      {
        name: "Truffle French Fries",
        price: "$8",
        description: "Finished with truffle seasoning.",
        tags: ["Upgrade"],
      },
      {
        name: "Seasonal Grilled Vegetables",
        price: "$7",
        description: "Rotating market vegetables with a grill char.",
        tags: ["Vegetable"],
      },
    ],
  },
  {
    id: "pasta",
    label: "Pasta",
    eyebrow: "Comfort turned up",
    items: [
      {
        name: "Chicken Fettuccini",
        price: "$19",
        description:
          "Grilled or blackened chicken in creamy mushroom garlic sauce with red onions.",
        tags: ["Creamy"],
      },
      {
        name: "Shrimp Sambuca",
        price: "$22",
        description: "Jumbo shrimp, fettuccini, and sambuca sauce.",
        tags: ["Seafood"],
      },
      {
        name: "Shrimp Scampi Pasta",
        price: "$22",
        description:
          "Jumbo shrimp and fettuccini tossed in the house scampi sauce.",
        tags: ["Seafood"],
      },
    ],
  },
  {
    id: "dessert",
    label: "Dessert",
    eyebrow: "Encore",
    items: [
      {
        name: "Brownie a la Mode",
        price: "$11",
        description: "Warm chocolate chip brownie with vanilla bean ice cream.",
        tags: ["Warm", "Ice cream"],
      },
      {
        name: "Fried Cheesecake",
        price: "$12",
        description:
          "Phyllo-wrapped cheesecake topped with chocolate drizzle and powdered sugar.",
        tags: ["House sweet"],
      },
    ],
  },
  {
    id: "build-your-own",
    label: "Build Your Own",
    eyebrow: "Burger or chicken sandwich",
    items: [
      {
        name: "Base Build",
        price: "$15",
        description:
          "Choose a burger or chicken sandwich, then dress it up your way.",
        tags: ["Custom"],
      },
      {
        name: "Add-On Lineup",
        price: "+$1 to +$3",
        description:
          "Cheddar, provolone, bacon, mushrooms, jalapenos, and banana peppers.",
        tags: ["Customize"],
      },
    ],
  },
];

const state = {
  activeCategory: "all",
  query: "",
};

function normalize(value) {
  return value.trim().toLowerCase();
}

function getFilters() {
  return [{ id: "all", label: "All" }].concat(
    menuData.map(({ id, label }) => ({ id, label }))
  );
}

function getVisibleSections() {
  const normalizedQuery = normalize(state.query);

  return menuData
    .filter((section) => state.activeCategory === "all" || section.id === state.activeCategory)
    .map((section) => ({
      ...section,
      items: section.items.filter((item) => {
        if (!normalizedQuery) {
          return true;
        }

        const haystack = `${item.name} ${item.description} ${item.tags.join(" ")}`.toLowerCase();
        return haystack.includes(normalizedQuery);
      }),
    }))
    .filter((section) => section.items.length > 0);
}

function renderFilters() {
  const filtersRoot = document.getElementById("category-filters");
  filtersRoot.replaceChildren();

  getFilters().forEach((filter) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-chip${state.activeCategory === filter.id ? " is-active" : ""}`;
    button.textContent = filter.label;
    button.setAttribute("aria-pressed", String(state.activeCategory === filter.id));
    button.addEventListener("click", () => {
      state.activeCategory = filter.id;
      renderMenu();
      renderFilters();
    });
    filtersRoot.appendChild(button);
  });
}

function renderMenu() {
  const sectionsRoot = document.getElementById("menu-sections");
  const sectionTemplate = document.getElementById("menu-section-template");
  const itemTemplate = document.getElementById("menu-item-template");
  const visibleSections = getVisibleSections();

  sectionsRoot.replaceChildren();

  if (!visibleSections.length) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.textContent =
      "No dishes matched that search. Try a different keyword or clear the category filter.";
    sectionsRoot.appendChild(emptyState);
    return;
  }

  visibleSections.forEach((section) => {
    const sectionFragment = sectionTemplate.content.cloneNode(true);
    const sectionNode = sectionFragment.querySelector(".menu-section");
    sectionNode.id = section.id;
    sectionFragment.querySelector(".section-label").textContent = section.eyebrow;
    sectionFragment.querySelector("h3").textContent = section.label;

    const itemsRoot = sectionFragment.querySelector(".items");

    section.items.forEach((item) => {
      const itemFragment = itemTemplate.content.cloneNode(true);
      itemFragment.querySelector("h4").textContent = item.name;
      itemFragment.querySelector(".item-price").textContent = item.price;
      itemFragment.querySelector(".item-description").textContent = item.description;

      const tagsRoot = itemFragment.querySelector(".item-tags");
      item.tags.forEach((tag) => {
        const tagNode = document.createElement("span");
        tagNode.className = "item-tag";
        tagNode.textContent = tag;
        tagsRoot.appendChild(tagNode);
      });

      itemsRoot.appendChild(itemFragment);
    });

    sectionsRoot.appendChild(sectionFragment);
  });
}

function bindSearch() {
  const searchInput = document.getElementById("menu-search");
  searchInput.value = state.query;
  searchInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderMenu();
  });
}

function initializeMenu() {
  bindSearch();
  renderFilters();
  renderMenu();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeMenu, { once: true });
} else {
  initializeMenu();
}
