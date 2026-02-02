import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header.js"
import HomePage from "./screens/HomePage.js"
import CatalogPage from "./screens/CatalogPage.js"
import ProductPage from "./screens/ProductPage.js"
import BlogPage from "./screens/BlogPage.js"
import BlogPostPage from "./screens/BlogPostPage.js"
import AboutPage from "./screens/AboutPage.js"

export default function App() {
  return React.createElement(
    BrowserRouter,
    null,
    React.createElement(Header, null),
    React.createElement(
      "main",
      { className: "app-container" },
      React.createElement(
        Routes,
        null,
        React.createElement(Route, { path: "/", element: React.createElement(HomePage) }),
        React.createElement(Route, { path: "/catalog", element: React.createElement(CatalogPage) }),
        React.createElement(Route, { path: "/product/:id", element: React.createElement(ProductPage) }),
        React.createElement(Route, { path: "/blog", element: React.createElement(BlogPage) }),
        React.createElement(Route, { path: "/blog/:id", element: React.createElement(BlogPostPage) }),
        React.createElement(Route, { path: "/about", element: React.createElement(AboutPage) }),
      ),
    ),
  )
}
