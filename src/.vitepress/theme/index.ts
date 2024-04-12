// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import ReloadPrompt from "./components/ReloadPrompt.vue";
import Carousel from "./components/Carousel.vue";
import CustomFlow from "./components/CustomFlow.vue";
import "./style.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      "layout-bottom": () => h(ReloadPrompt),
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    app.component("Carousel", Carousel);
    app.component("CustomFlow", CustomFlow);
  },
} satisfies Theme;
