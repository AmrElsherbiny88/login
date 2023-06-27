
// loading page start
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
//   loading page end

const themes = [
  {
    background: "#fff",
    color: "#000",
    primaryColor: "#fff"
},
{
    background: "#000",
    color: "#fff",
    primaryColor: "#000"
},
  {
      background: "#1A1A2E",
      color: "#FFFFFF",
      primaryColor: "#0F3460"
  },
  {
      background: "#461220",
      color: "#FFFFFF",
      primaryColor: "#E94560"
  },
  {
      background: "#192A51",
      color: "#FFFFFF",
      primaryColor: "#967AA1"
  },
  {
      background: "#231F20",
      color: "#FFF",
      primaryColor: "#BB4430"
  }
];

const setTheme = (theme) => {
  const root = document.querySelector(":root");
  root.style.setProperty("--background", theme.background);
  root.style.setProperty("--color", theme.color);
  root.style.setProperty("--primary-color", theme.primaryColor);
  root.style.setProperty("--glass-color", theme.glassColor);
};

const displayThemeButtons = () => {
  const btnContainer = document.querySelector(".theme-btn-container");
  themes.forEach((theme) => {
      const div = document.createElement("div");
      div.className = "theme-btn";
      div.style.cssText = `background: ${theme.background}; width: 25px; height: 25px`;
      btnContainer.appendChild(div);
      div.addEventListener("click", () => setTheme(theme));
  });
};

displayThemeButtons();
