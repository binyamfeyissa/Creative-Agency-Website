import { BlurScrollEffect as BlurScrollEffect1 } from "./blurScrollEffect.js";

// Registers the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const init = () => {
  const effects = [{ selector: "[data-effect-1]", effect: BlurScrollEffect1 }];

  // Iterate over each effect configuration and apply the effect to all matching elements
  effects.forEach(({ selector, effect }) => {
    document.querySelectorAll(selector).forEach((el) => {
      new effect(el);
    });
  });
};

init();
