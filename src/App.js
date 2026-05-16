import { useMemo, useState } from "react";

const menuSections = [
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
  },
  {
    title: "Entrees",
    items: ["Madga Chicken", "Filet Mignon", "Surf and Turf", "NY Strip"],
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
  },
  {
    title: "Pasta",
    items: ["Chicken Fettuccini", "Shrimp Sambuca", "Shrimp Scampi"],
  },
  {
    title: "Dessert",
    items: ["Brownie A La Mode", "Fried Cheesecake"],
  },
  {
    title: "Build Your Own Burger or Chicken Sandwich",
    items: [
      "Cheddar Cheese",
      "Provolone",
      "Bacon",
      "Mushrooms",
      "Jalapenos",
      "Banana Peppers",
    ],
  },
];

function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [status, setStatus] = useState("");

  const totalSelected = selectedItems.length;

  const selectedLabel = useMemo(() => {
    if (!selectedItems.length) {
      return "No items selected yet.";
    }

    return selectedItems.join(", ");
  }, [selectedItems]);

  function toggleItem(item) {
    setSelectedItems((current) => {
      if (current.includes(item)) {
        return current.filter((entry) => entry !== item);
      }

      return [...current, item];
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!selectedItems.length) {
      setStatus("Pick at least one item before you submit.");
      return;
    }

    const subject = encodeURIComponent("Klincher Menu Request");
    const body = encodeURIComponent(
      [
        "Klincher menu request",
        "",
        "Selected items:",
        ...selectedItems.map((item) => `- ${item}`),
      ].join("\n")
    );

    window.location.href = `mailto:orders@klincher.local?subject=${subject}&body=${body}`;
    setStatus("Your order draft is ready.");
  }

  return (
    <div className="page-shell">
      <header className="hero" id="top">
        <div className="hero-backdrop" />
        <nav className="site-nav">
          <a className="brand" href="#top">
            Klincher
          </a>
          <a className="nav-link" href="#menu">
            Order Now
          </a>
        </nav>

        <div className="hero-copy">
          <p className="eyebrow">Eat Like You Play</p>
          <h1>BAD ASS FOOD FOR GAME NIGHT.</h1>
          <p className="hero-text">
            Check what you want. Hit submit. Done.
          </p>
          <a className="hero-cta" href="#menu">
            Build Your Order
          </a>
        </div>
      </header>

      <main className="order-page" id="menu">
        <section className="menu-intro">
          <p className="eyebrow">Menu</p>
          <h2>Check what you want.</h2>
          <p>
            No pricing. No clutter. Just the menu and a submit button.
          </p>
        </section>

        <form className="order-layout" onSubmit={handleSubmit}>
          <div className="menu-grid">
            {menuSections.map((section) => (
              <section className="menu-section" key={section.title}>
                <h3>{section.title}</h3>
                <div className="check-list">
                  {section.items.map((item) => {
                    const checked = selectedItems.includes(item);

                    return (
                      <label className={`menu-option${checked ? " is-checked" : ""}`} key={item}>
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleItem(item)}
                        />
                        <span className="checkmark" aria-hidden="true" />
                        <span className="option-text">{item}</span>
                      </label>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

          <aside className="submit-rail">
            <p className="eyebrow">Selected</p>
            <h3>{totalSelected} item{totalSelected === 1 ? "" : "s"}</h3>
            <p className="selected-items">{selectedLabel}</p>
            <button className="submit-button" type="submit">
              Submit Order
            </button>
            <p className="form-status" role="status" aria-live="polite">
              {status}
            </p>
          </aside>
        </form>
      </main>
    </div>
  );
}

export default App;
