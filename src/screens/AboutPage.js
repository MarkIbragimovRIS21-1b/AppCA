import React from "react"
import "./about.css"
import fondLogoImg from "../assets/fond-logo.png"
import vkIcon from "../assets/vk-icon.svg"
import youtubeIcon from "../assets/youtube-icon.svg"
import telegramIcon from "../assets/telegram-icon.svg"

export default function AboutPage() {
  return React.createElement(
    "section",
    { className: "about container" },
    React.createElement("h2", { className: "about-title" }, "О нас"),

    // Main description block
    React.createElement(
      "div",
      { className: "about-description card" },
      React.createElement("p", null, "Текст о компании будет добавлен позже..."),
    ),

    // Social media blocks
    React.createElement(
      "div",
      { className: "social-blocks" },
      React.createElement(
        "a",
        {
          href: "https://vk.com",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "social-card card",
        },
        React.createElement("img", {
          src: vkIcon,
          alt: "VK",
          className: "social-icon-img",
        }),
        React.createElement("h3", null, "Мы в ВКонтакте"),
      ),
      React.createElement(
        "a",
        {
          href: "https://youtube.com",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "social-card card",
        },
        React.createElement("img", {
          src: youtubeIcon,
          alt: "YouTube",
          className: "social-icon-img",
        }),
        React.createElement("h3", null, "Мы на YouTube"),
      ),
      React.createElement(
        "a",
        {
          href: "https://telegram.org",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "social-card card",
        },
        React.createElement("img", {
          src: telegramIcon,
          alt: "Telegram",
          className: "social-icon-img",
        }),
        React.createElement("h3", null, "Мы в Telegram"),
      ),
    ),

    // Additional text block
    React.createElement(
      "div",
      { className: "about-text card" },
      React.createElement("p", null, "Дополнительная информация о компании и нашей деятельности..."),
    ),

    // Contact information
    React.createElement(
      "div",
      { className: "contact-info card" },
      React.createElement("h3", null, "Контакты"),
      React.createElement(
        "p",
        { className: "contact-item" },
        React.createElement("strong", null, "Компания располагается по адресу:"),
        " место для адреса",
      ),
      React.createElement(
        "p",
        { className: "contact-item" },
        React.createElement("strong", null, "Телефон:"),
        " место для телефона",
      ),
      React.createElement(
        "p",
        { className: "contact-item" },
        React.createElement("strong", null, "Email:"),
        " место для почты",
      ),
    ),

    // Foundation support block
    React.createElement(
      "div",
      { className: "foundation-block card" },
      React.createElement(
        "div",
        { className: "foundation-logo" },
        React.createElement("img", { src: fondLogoImg, alt: "Фонд содействия инновациям" }),
      ),
      React.createElement(
        "p",
        { className: "foundation-text" },
        "Данный сайт сделан при поддержке фонда содействия инновациям",
      ),
    ),
  )
}
