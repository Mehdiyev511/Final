import React, { useEffect, useState } from "react";

//custom style
import { ComponentPortfolio } from "./style/PortfolioStyle";

//data
import PortfolioData from "./data/PortfolioData";
import PortfolioItem from "./data/PortfolioItem";

const PortfolioFilter = (props) => {
  const [filter, setFilter] = useState("all");
  const [category, setCategory] = useState([]);

  useEffect(() => {
    setCategory(PortfolioData);
  }, []);

  useEffect(() => {
    setCategory([]);
    const filtered = PortfolioData.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setCategory(filtered);
  }, [filter]);

  return (
    <ComponentPortfolio className="portfolio">
      <div className="container portfolio__container">
        {/* navigation menu */}

        <nav>
          <ul className="portfolio__menu">
            <li active={`${filter === "all"}`} onClick={() => setFilter("all")}>
              All
            </li>
            <li
              active={`${filter === "branding"}`}
              onClick={() => setFilter("branding")}
            >
              Branding
            </li>
            <li
              active={`${filter === "marketing"}`}
              onClick={() => setFilter("marketing")}
            >
              Digital marketing
            </li>
            <li active={`${filter === "web"}`} onClick={() => setFilter("web")}>
              Web
            </li>
            <li
              active={`${filter === "photography"}`}
              onClick={() => setFilter("photography")}
            >
              Photography
            </li>
            <li
              active={`${filter === "ecommerce"}`}
              onClick={() => setFilter("ecommerce")}
            >
              eCommerce
            </li>
          </ul>
        </nav>

        {/* gallery  */}
        <div className="portfolio__gallery">
          {category.map((item) =>
            item.filtered === true ? (
              <PortfolioItem
                key={item.id}
                img={item.img}
                alt={item.alt}
                title={item.title}
                office={item.office}
                category={item.category}
              />
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </ComponentPortfolio>
  );
};

export default PortfolioFilter;
