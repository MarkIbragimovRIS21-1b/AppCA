import React from "react"
import "./blog.css"
import { Link } from "react-router-dom"
import antColonyImg from "../assets/ant-colony.jpg"

const posts = [
  {
    id: 1,
    title: "Как правильно выбрать первый формикарий",
    excerpt:
      "Подробное руководство для начинающих мирмекологов по выбору и установке своей первой муравьиной колонии. Рассматриваем типы формикариев, материалы и критерии выбора.",
    category: "Для начинающих",
    badge: null,
  },
  {
    id: 2,
    title: "Виды муравьёв для домашнего содержания",
    excerpt:
      "Обзор самых популярных видов муравьёв, которые подходят для содержания в формикариях. От неприхотливых Lasius Niger до экзотических тропических видов.",
    category: "Виды муравьёв",
    badge: null,
  },
  {
    id: 3,
    title: "Правильное кормление муравьиной колонии",
    excerpt:
      "Всё о питании муравьёв: что можно давать, как часто кормить и каких ошибок нужно избегать. Создаём сбалансированный рацион для здоровой колонии.",
    category: "Уход",
    badge: null,
  },
]

export default function BlogPage() {
  return React.createElement(
    "section",
    { className: "blog container" },
    React.createElement("h2", null, "Блог о мирмекологии"),
    React.createElement(
      "p",
      { className: "blog-intro" },
      "Погрузитесь в удивительный мир муравьёв с нашими экспертными статьями и видеоматериалами. Изучайте, учитесь и совершенствуйте свои навыки в содержании муравьиных колоний.",
    ),
    React.createElement(
      "div",
      { className: "posts" },
      posts.map((p) =>
        React.createElement(
          "article",
          { className: "card post", key: p.id },
          React.createElement("img", {
            src: antColonyImg,
            alt: p.title,
            className: "post-image",
          }),
          p.badge && React.createElement("span", { className: "post-badge" }, p.badge),
          React.createElement(
            "div",
            { className: "post-content" },
            React.createElement("div", { className: "post-category" }, p.category),
            React.createElement("h3", null, p.title),
            React.createElement("p", null, p.excerpt),
            React.createElement(Link, { to: "/blog/" + p.id, className: "link-more" }, "Смотреть"),
          ),
        ),
      ),
    ),
  )
}
