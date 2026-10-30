import Titan from "./titan";

// Allowlist of demos the /demo route can display, keyed by the `id` query param.
// External demos are loaded in an iframe; internal demos render their component directly.
const demos = {
  erp: {
    title: "Ground Control (ERP)",
    url: "https://isaac-vh1.github.io/ERP-Demo/",
  },
  Unavailable: {
    title: "Titan Remote",
    component: Titan,
  },
  berps: {
    title : "ERP Simulation",
    url: "https://isaac-vh1.github.io/berps/",
  }
};

export default demos;
