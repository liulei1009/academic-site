const toggle = document.querySelector(".lang-toggle");
const translatable = document.querySelectorAll("[data-zh][data-en]");
let language = "zh";

function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  translatable.forEach((element) => {
    element.textContent = element.dataset[language];
  });
  toggle.textContent = language === "zh" ? "English" : "中文";
  toggle.setAttribute("aria-label", language === "zh" ? "切换到英文" : "Switch to Chinese");
  document.querySelector("nav").setAttribute("aria-label", language === "zh" ? "主导航" : "Main navigation");
}

toggle.addEventListener("click", () => setLanguage(language === "zh" ? "en" : "zh"));
document.querySelector("#year").textContent = new Date().getFullYear();
