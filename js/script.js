"use strict";
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true }
});
const getStoredTheme = () => localStorage.getItem("theme"); const setStoredTheme = theme => localStorage.setItem("theme", theme); const getPreferredTheme = () => { const storedTheme = getStoredTheme(); if (storedTheme) { return storedTheme; } return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; }; const setTheme = theme => { if (theme === "auto") { document.documentElement.setAttribute("data-bs-theme", (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")); } else { document.documentElement.setAttribute("data-bs-theme", theme); } }; setTheme(getPreferredTheme()); window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => { const storedTheme = getStoredTheme(); if (storedTheme !== "light" && storedTheme !== "dark") { setTheme(getPreferredTheme()); } })