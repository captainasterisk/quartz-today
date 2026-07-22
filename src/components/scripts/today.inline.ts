function updateTodayBadges() {
  const badges = document.querySelectorAll(".today-component [data-today='true']");
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

const cleanupFns: Array<() => void> = [];

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
