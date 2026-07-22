import { createRequire } from 'module';

createRequire(import.meta.url);

// src/components/styles/today.scss
var today_default = ".quartz-today {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-family: var(--font-interface, inherit);\n  font-size: 0.85rem;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  color: var(--secondary, #3a3637);\n  background: var(--highlight, rgba(143, 159, 169, 0.15));\n  padding: 0.25rem 0.6rem;\n  border-radius: 6px;\n  border: 1px solid var(--lightgray, #e5e5e5);\n  line-height: 1.2;\n}";

// src/components/scripts/today.inline.ts
var today_inline_default = `function updateTodayBadges() {
  const badges = document.querySelectorAll(".quartz-today [data-today='true']");
  badges.forEach((elem) => {
    const now = new Date();
    const prefix = elem.getAttribute("data-prefix") || "TODAY";
    const separator = elem.getAttribute("data-separator") || ", ";
    const locale = elem.getAttribute("data-locale") || "en-US";
    const uppercase = elem.getAttribute("data-uppercase") !== "false";

    const day = now.getDate().toString().padStart(2, "0");
    const month = now.toLocaleDateString(locale, { month: "short" });
    const year = now.getFullYear();

    let formattedDate = day + " " + month + " " + year;
    if (uppercase) {
      formattedDate = formattedDate.toUpperCase();
    }

    elem.textContent = prefix + separator + formattedDate;
  });
}

const cleanupFns = [];
const navHandler = () => updateTodayBadges();
const renderHandler = () => updateTodayBadges();

document.addEventListener("nav", navHandler);
cleanupFns.push(() => document.removeEventListener("nav", navHandler));

document.addEventListener("render", renderHandler);
cleanupFns.push(() => document.removeEventListener("render", renderHandler));

if (typeof window !== "undefined" && window.addCleanup) {
  window.addCleanup(() => {
    cleanupFns.forEach((fn) => fn());
  });
}
`;

var l;
l = { __e: function(n2, l2, u3, t2) {
  for (var i2, o2, r2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((o2 = i2.constructor) && null != o2.getDerivedStateFromError && (i2.setState(o2.getDerivedStateFromError(n2)), r2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), r2 = i2.__d), r2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;

// node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var f2 = 0;
function u2(e2, t2, n2, o2, i2, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}

// src/components/Today.tsx
var defaultOptions = {
  prefix: "TODAY",
  separator: ", ",
  locale: "en-US",
  uppercase: true,
  className: ""
};
function formatLocalDate(now, locale, uppercase) {
  const day = now.getDate().toString().padStart(2, "0");
  const month = now.toLocaleDateString(locale, { month: "short" });
  const year = now.getFullYear();
  let result = `${day} ${month} ${year}`;
  if (uppercase) {
    result = result.toUpperCase();
  }
  return result;
}
var Today_default = ((userOpts) => {
  const opts = { ...defaultOptions, ...userOpts };
  const Today = ({ displayClass }) => {
    const now = /* @__PURE__ */ new Date();
    const dateStr = formatLocalDate(now, opts.locale, opts.uppercase);
    const initialText = `${opts.prefix}${opts.separator}${dateStr}`;
    return /* @__PURE__ */ u2("div", { class: `quartz-today ${opts.className} ${displayClass ?? ""}`.trim(), children: /* @__PURE__ */ u2(
      "span",
      {
        class: "today-badge",
        "data-today": "true",
        "data-prefix": opts.prefix,
        "data-separator": opts.separator,
        "data-locale": opts.locale,
        "data-uppercase": opts.uppercase ? "true" : "false",
        children: initialText
      }
    ) });
  };
  Today.css = today_default;
  Today.afterDOMLoaded = today_inline_default;
  return Today;
});

export { Today_default as Today };