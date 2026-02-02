import React from "react"
import "./home.css"
import logoImg from "../assets/logo.png"

export default function HomePage() {
  return React.createElement(
    "section",
    { className: "home container" },
    // Header Section
    React.createElement(
      "header",
      { className: "header" },
      React.createElement(
        "div",
        { className: "hero-logo-circle" },
        React.createElement("img", { src: logoImg, alt: "Caelestis Ant" }),
      ),
    ),
    // Hero Content
    React.createElement(
      "div",
      { className: "hero-content card" },
      React.createElement("h1", null, "Муравьи как домашние питомцы"),
      React.createElement(
        "p",
        null,
        "Вас приветствует команда Caelestis Ant, мы занимаемся мирмекиперством (содержанием муравьёв) уже более 6 лет, имеем большой опыт содержания разных видов. Здесь вас ждут:",
      ),
      React.createElement(
        "ul",
        { className: "hero-features" },
        React.createElement("li", null, "Блоги о колониях!"),
        React.createElement("li", null, "Наши фирменные линейки формикариев и декор!"),
        React.createElement("li", null, "Различные виды муравьев!"),
      ),
    ),
    // Why Choose Us Section
    React.createElement(
      "div",
      { className: "why-choose" },
      React.createElement("h2", null, "Почему выбирают нас"),
      React.createElement(
        "p",
        { className: "why-choose-intro" },
        "Наши конкурентные преимущества делают нас лидерами в области создания идеальных условий для муравьиных колоний",
      ),
      React.createElement(
        "div",
        { className: "features" },
        React.createElement(
          "article",
          { className: "feature card" },
          React.createElement("div", { className: "feature-icon" }, "🛡️"),
          React.createElement(
            "div",
            { className: "feature-content" },
            React.createElement("h3", null, "Безопасность и качество"),
            React.createElement(
              "p",
              null,
              "Наши формикарии изготовлены из экологически чистых материалов высшего качества. Каждый продукт проходит тщательную проверку перед отправкой покупателю.",
            ),
          ),
        ),
        React.createElement(
          "article",
          { className: "feature card" },
          React.createElement("div", { className: "feature-icon" }, "⚡"),
          React.createElement(
            "div",
            { className: "feature-content" },
            React.createElement("h3", null, "Инновационные технологии"),
            React.createElement(
              "p",
              null,
              "Мы используем передовые разработки в области мирмекологии. Уникальные системы вентиляции и увлажнения обеспечивают идеальные условия для жизни муравьиных колоний.",
            ),
          ),
        ),
        React.createElement(
          "article",
          { className: "feature card" },
          React.createElement("div", { className: "feature-icon" }, "💚"),
          React.createElement(
            "div",
            { className: "feature-content" },
            React.createElement("h3", null, "Забота о муравьях"),
            React.createElement(
              "p",
              null,
              "Все наши решения разработаны с учётом естественных потребностей муравьёв. Мы создаём оптимальные условия для роста и развития колоний.",
            ),
          ),
        ),
        React.createElement(
          "article",
          { className: "feature card" },
          React.createElement("div", { className: "feature-icon" }, "📞"),
          React.createElement(
            "div",
            { className: "feature-content" },
            React.createElement("h3", null, "Экспертная поддержка"),
            React.createElement(
              "p",
              null,
              "Наша команда состоит из опытных мирмекологов, готовых помочь как начинающим, так и опытным любителям муравьев. Консультации и рекомендации по содержанию.",
            ),
          ),
        ),
      ),
    ),
  )
}
