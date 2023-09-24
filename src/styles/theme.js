export const ligthTheme = {
  colors: {
    light: "#FFFFFF",
    mainLigth: "#666666",
    mainDark: "#A7A7A7",
    headingLigth: "#42446E",
    headingDark: "#D9D9D9E",
    accent: "#018C0F",
    iconColor: "#fff",
  },
  background: {
    light: "#FFFFFF",
    main: "#fff",
    backgroundIcon: "#666666",
    accentbgc: "#D7FFE0",
    gradientHeading: "linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%));",
  },
  boxShadow: "2px 2px 100px 0px rgba(0, 0, 0, 0.2)",
  title: {
    main: "58px",
    secondary: "42px",
  },
  spacing: (value) => `${value * 4}px`,
  radius: "8px",
  transition: "all 300ms cubic-bezier(0.53, 0.5, 0.53, 0.52)",
};

export const darkTheme = {
  colors: {
    mainLigth: "#666666",
    mainDark: "#A7A7A7",

    iconColor: "#fff",
    headingLigth: "#42446E",
    headingDark: "#D9D9D9E",
    accent: "#018C0F",
  },
  background: {
    backgroundIcon: "#666666",
    main: "#191919",
    dark: "#191919",
    accentbgc: "#D7FFE0",
    gradientHeading: "linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%));",
  },
  title: {
    main: "58px",
    secondary: "42px",
  },
  spacing: (value) => `${value * 4}px`,
  radius: "8px",
  transition: "all 300ms cubic-bezier(0.53, 0.5, 0.53, 0.52)",
};
