import { useMemo, useState } from "react";
import { menuData } from "./menuData";

function App() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [query, setQuery] = useState("");

  const filters = [
    { id: "all", label: "All" },
    ...menuData.map(({ id, label }) => ({ id, label })),
  ];

  const visibleSections = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return menuData
      .filter((section) => activeCategory === "all" || section.id === activeCategory)
      .map((section) => ({
        ...section,
        items: section.items.filter((item) => {
          if (!normalizedQuery) return true;

          const haystack =
            `${item.name} ${item.description} ${item.tags.join(" ")}`.toLowerCase();
          return haystack.includes(normalizedQuery);
        }),
      }))
      .filter((section) => section.items.length > 0);
  }, [activeCategory, query]);

  return (
    <div className="page-shell">
      <header className="hero" id="top">
        <nav className="topbar">
          <div className="brand-lockup">
            <span className="brand-mark">BLEMENU</span>
            <span className="brand-subtitle">Digital menu system</span>
          </div>
          <a className="ghost-link" href="#menu">
            Open menu
          </a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Now serving the KLUNCHER pilot</p>
            <h1>KLUNCHER</h1>
            <p className="hero-tag">Eat like you play.</p>
            <p className="hero-body">
              A stage-ready restaurant menu rebuilt for phones, tablets, and venue
              screens. Fast to browse, easy to update, and sharp enough to feel like
              part of the brand instead of an afterthought.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#menu">
                Browse menu
              </a>
              <a className="button button-secondary" href="#experience">
                See BLEMENU flow
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="visual-frame visual-stage">
              <div className="visual-stage-header">
                <span>Tonight&apos;s lineup</span>
                <span>BLEMENU live</span>
              </div>
              <div className="visual-stage-grid">
                <div className="visual-column">
                  <p>Appetizers</p>
                  <strong>Chicken Wings</strong>
                  <strong>Dynamite Sticks</strong>
                  <strong>Quesadilla</strong>
                </div>
                <div className="visual-column">
                  <p>Main Event</p>
                  <strong>Filet Mignon</strong>
                  <strong>Surf and Turf</strong>
                  <strong>Chicken Fettuccini</strong>
                </div>
              </div>
              <div className="visual-stage-footer">
                <span>Fast scan</span>
                <span>Bold branding</span>
                <span>Easy updates</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="signal-band" id="experience">
          <div>
            <p className="band-label">Built for live hospitality</p>
            <h2>One menu, three jobs.</h2>
          </div>
          <div className="band-points">
            <p>Guests scan and order faster.</p>
            <p>Staff answer fewer repeat questions.</p>
            <p>Operators update pricing and specials without reprinting.</p>
          </div>
        </section>

        <section className="controls-section" id="menu">
          <div className="controls-copy">
            <p className="section-label">Interactive menu</p>
            <h2>Filter by craving. Search by dish.</h2>
          </div>

          <div className="controls-panel">
            <label className="search-field" htmlFor="menu-search">
              <span>Search the menu</span>
              <input
                id="menu-search"
                type="search"
                placeholder="Chicken, pasta, cheesecake..."
                autoComplete="off"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>
            <div className="filter-strip" aria-label="Categories">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  className={`filter-chip${
                    activeCategory === filter.id ? " is-active" : ""
                  }`}
                  type="button"
                  onClick={() => setActiveCategory(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="menu-layout">
          <aside className="menu-sidebar">
            <p className="section-label">Venue snapshot</p>
            <h3>KLUNCHER pilot notes</h3>
            <ul className="sidebar-list">
              <li>
                Concert-driven visual system with red, silver, and blackout contrast
              </li>
              <li>
                Categories optimized for quick scanning on a phone in low light
              </li>
              <li>Structure ready for QR menus, kiosks, or TV loops</li>
            </ul>
          </aside>

          <div className="menu-sections">
            {visibleSections.length ? (
              visibleSections.map((section) => (
                <section className="menu-section is-visible" id={section.id} key={section.id}>
                  <div className="section-header">
                    <p className="section-label">{section.eyebrow}</p>
                    <h3>{section.label}</h3>
                  </div>
                  <div className="items">
                    {section.items.map((item) => (
                      <article className="menu-item" key={item.name}>
                        <div className="item-copy">
                          <div className="item-header">
                            <h4>{item.name}</h4>
                            <span className="item-price">{item.price}</span>
                          </div>
                          <p className="item-description">{item.description}</p>
                        </div>
                        <div className="item-tags">
                          {item.tags.map((tag) => (
                            <span className="item-tag" key={`${item.name}-${tag}`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))
            ) : (
              <div className="empty-state">
                No dishes matched that search. Try a different keyword or clear the
                category filter.
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
