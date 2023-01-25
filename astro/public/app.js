import Swup from "swup";
import SwupHeadPlugin from "@swup/head-plugin";
import SwupFadeTheme from '@swup/fade-theme';

const swup = new Swup({
  plugins: [new SwupHeadPlugin(), new SwupFadeTheme()],
});