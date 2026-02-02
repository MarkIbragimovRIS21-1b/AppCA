"use client"

import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./header.css"
import logoImg from "../assets/logo.png"

export default function Header() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const isActive = (p) => location.pathname === p

  return React.createElement(
    "header",
    { className: "site-header" },
    React.createElement(
      "div",
      { className: "container header-inner" },
      React.createElement(
        Link,
        { to: "/", className: "brand" },
        React.createElement("img", {
          src: logoImg,
          alt: "Caelestis Ant",
          className: "logo",
        }),
        React.createElement("span", { className: "brand-title" }, "Caelestis Ant"),
      ),
      React.createElement(
        "button",
        {
          className: "menu-toggle",
          onClick: () => setMenuOpen(!menuOpen),
          "aria-label": "Toggle menu",
        },
        "☰",
      ),
      React.createElement(
        "nav",
        { className: "nav" },
        React.createElement(
          Link,
          {
            to: "/",
            className: isActive("/") ? "nav-link active" : "nav-link",
          },
          "Главная",
        ),
        React.createElement(
          Link,
          {
            to: "/blog",
            className: isActive("/blog") ? "nav-link active" : "nav-link",
          },
          "Блог",
        ),
        React.createElement(
          Link,
          {
            to: "/about",
            className: isActive("/about") ? "nav-link active" : "nav-link",
          },
          "О нас",
        ),
      ),
    ),
    menuOpen &&
      React.createElement(
        "div",
        { className: "mobile-menu" },
        React.createElement(
          "div",
          { className: "mobile-menu-header" },
          React.createElement("img", {
            src: logoImg,
            alt: "Caelestis Ant",
            className: "mobile-logo",
          }),
          React.createElement(
            "button",
            {
              className: "mobile-menu-close",
              onClick: () => setMenuOpen(false),
              "aria-label": "Close menu",
            },
            "×",
          ),
        ),
        React.createElement("h2", { className: "mobile-menu-title" }, "Навигация"),
        React.createElement(
          "nav",
          { className: "mobile-nav" },
          React.createElement(
            Link,
            {
              to: "/",
              onClick: () => setMenuOpen(false),
              className: "mobile-nav-button",
            },
            "Главная",
          ),
          React.createElement(
            Link,
            {
              to: "/blog",
              onClick: () => setMenuOpen(false),
              className: "mobile-nav-button",
            },
            "Блог",
          ),
          React.createElement(
            Link,
            {
              to: "/about",
              onClick: () => setMenuOpen(false),
              className: "mobile-nav-button",
            },
            "О нас",
          ),
        ),
        React.createElement(
          "div",
          { className: "mobile-menu-footer" },
          React.createElement("h3", null, "Почему выбирают наш сайт"),
          React.createElement(
            "ul",
            { className: "mobile-features" },
            React.createElement("li", null, "Более 6 лет опыта в мирмекиперстве"),
            React.createElement("li", null, "Качественные товары от проверенных производителей"),
            React.createElement("li", null, "Профессиональные консультации и поддержка"),
          ),
          React.createElement("h3", null, "Мир мирмекиперства ждет вас!"),
          React.createElement(
            "p",
            null,
            "Откройте для себя удивительный мир содержания муравьев. У нас вы найдете все необходимое для ваших питомцев.",
          ),
          React.createElement(
            "div",
            { className: "mobile-promo" },
            React.createElement("div", { className: "promo-icon" }, "🏠"),
            React.createElement("h4", null, "Формикарии премиум-класса"),
            React.createElement("p", null, "Муравьиные фермы с применением уникальных технологий"),
          ),
          React.createElement(
            "div",
            { className: "mobile-promo" },
            React.createElement("div", { className: "promo-icon" }, "🐜"),
            React.createElement("h4", null, "Редкие виды муравьев"),
            React.createElement("p", null, "Широкий выбор маток различных видов"),
          ),
          React.createElement(
            "div",
            { className: "mobile-promo" },
            React.createElement("div", { className: "promo-icon" }, "📚"),
            React.createElement("h4", null, "Экспертная поддержка"),
            React.createElement("p", null, "Мы готовы дать советы по содержанию муравьев"),
          ),
        ),
      ),
  )
}
