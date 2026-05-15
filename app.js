const menuData = [
  {
    id: "appetizers",
    label: "Appetizers",
    eyebrow: "Eat like you play",
    items: [
      {
        name: "Chicken Tenders",
        price: "$12",
        description:
          "Five tenders served with your choice of sauce. Make it a platter with fries.",
        tags: [],
      },
      {
        name: "Hummus",
        price: "$11",
        description:
          "Served with carrots, celery, cucumbers, broccoli, and warm flat bread.",
        tags: [],
      },
      {
        name: "Dynamite Sticks",
        price: "$12",
        description:
          "Phyllo dough stuffed with sauteed vegetables, fried until golden brown, served with sweet red chili sauce.",
        tags: [],
      },
      {
        name: "Chicken Wings",
        price: "$15",
        description:
          "Your choice of plain buffalo or BBQ sauce, served with ranch or blue cheese and celery sticks.",
        tags: [],
      },
      {
        name: "Shrimp Cocktail",
        price: "$16",
        description: "Chilled jumbo shrimp, served with cocktail sauce.",
        tags: [],
      },
      {
        name: "Shrimp Scampi",
        price: "$17",
        description:
          "Pan seared shrimp tossed with white sambuca cream sauce with tomato and mushrooms.",
        tags: [],
      },
      {
        name: "Buffalo Style Shrimp",
        price: "$17",
        description:
          "Cajun seasoned, char-broiled and smothered in our house buffalo sauce, topped with bleu cheese crumbs, served with ranch.",
        tags: [],
      },
      {
        name: "Quesadilla",
        price: "$13",
        description:
          "Melted cheddar, provolone, bell peppers and red onions, served with salsa and sour cream. Add chicken or steak.",
        tags: [],
      },
      {
        name: "Tenderloin Ravioli",
        price: "$15",
        description: "Breaded four cheese ravioli served with marinara sauce.",
        tags: [],
      },
      {
        name: "Dessert Springs",
        price: "$10",
        description: "Phyllo dough, cinnamon sugar, and caramel sauce.",
        tags: [],
      },
    ],
  },
  {
    id: "salads-wraps",
    label: "Salads / Wraps",
    eyebrow: "Make any salad a wrap",
    items: [
      {
        name: "Buffalo Chicken",
        price: "$16",
        description:
          "Cajun chicken, char-broiled and sliced over mixed greens with cheese, tomatoes and bacon bits, tossed in our spicy ranch.",
        tags: [],
      },
      {
        name: "Chicken Caesar",
        price: "$15",
        description:
          "Grilled or fried chicken over romaine, parmesan and croutons, tossed with a tangy caesar dressing.",
        tags: [],
      },
      {
        name: "House Salad",
        price: "$12",
        description:
          "Fresh mixed greens with parmesan, provolone, bacon bits and green onions, tossed with sweet Italian vinaigrette.",
        tags: [],
      },
    ],
  },
  {
    id: "entrees",
    label: "Entrees",
    eyebrow: "Served with a salad and one side",
    items: [
      {
        name: "Madga Chicken",
        price: "$23",
        description:
          "Lightly breaded, topped with melted provolone, white wine mushroom and prosciutto sauce.",
        tags: [],
      },
      {
        name: "Filet Mignon",
        price: "$34",
        description: "8 oz grilled to perfection.",
        tags: [],
      },
      {
        name: "Surf and Turf",
        price: "$36",
        description: "8 oz filet mignon with three jumbo shrimp.",
        tags: [],
      },
      {
        name: "NY Strip",
        price: "$31",
        description: "12 oz grilled to perfection.",
        tags: [],
      },
    ],
  },
  {
    id: "sides",
    label: "Sides",
    eyebrow: "Pick one",
    items: [
      {
        name: "Baked Potato",
        price: "$6",
        description: "",
        tags: [],
      },
      {
        name: "Loaded Baked Potato",
        price: "$8",
        description: "",
        tags: [],
      },
      {
        name: "Broccoli",
        price: "$6",
        description: "",
        tags: [],
      },
      {
        name: "Pasta",
        price: "$7",
        description: "",
        tags: [],
      },
      {
        name: "French Fries",
        price: "$6",
        description: "",
        tags: [],
      },
      {
        name: "Truffle French Fries",
        price: "$8",
        description: "",
        tags: [],
      },
      {
        name: "Seasonal Grilled Vegetables",
        price: "$7",
        description: "",
        tags: [],
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
        tags: [],
      },
      {
        name: "Shrimp Sambuca",
        price: "$22",
        description: "Jumbo shrimp, fettuccini and sambuca sauce.",
        tags: [],
      },
      {
        name: "Shrimp Scampi",
        price: "$22",
        description:
          "Jumbo shrimp and fettuccini tossed in our famous scampi sauce.",
        tags: [],
      },
    ],
  },
  {
    id: "dessert",
    label: "Dessert",
    eyebrow: "Encore",
    items: [
      {
        name: "Brownie A La Mode",
        price: "$11",
        description:
          "Warm chocolate chip brownie with vanilla bean ice cream.",
        tags: [],
      },
      {
        name: "Fried Cheesecake",
        price: "$12",
        description:
          "Phyllo wrapped cheesecake, fried golden, topped with chocolate drizzle and powdered sugar.",
        tags: [],
      },
    ],
  },
  {
    id: "build-your-own",
    label: "Build Your Own",
    eyebrow: "Burger or chicken sandwich",
    items: [
      {
        name: "Dress It Up",
        price: "",
        description:
          "Cheddar cheese, provolone, bacon, mushrooms, jalapenos, and banana peppers.",
        tags: [],
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

      const priceNode = itemFragment.querySelector(".item-price");
      if (item.price) {
        priceNode.textContent = item.price;
      } else {
        priceNode.remove();
      }

      const descriptionNode = itemFragment.querySelector(".item-description");
      if (item.description) {
        descriptionNode.textContent = item.description;
      } else {
        descriptionNode.remove();
      }

      const tagsRoot = itemFragment.querySelector(".item-tags");
      if (item.tags.length) {
        item.tags.forEach((tag) => {
          const tagNode = document.createElement("span");
          tagNode.className = "item-tag";
          tagNode.textContent = tag;
          tagsRoot.appendChild(tagNode);
        });
      } else {
        tagsRoot.remove();
      }

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
