import type { RouterConfig } from "@nuxt/schema";

// const redirects = [
//   "/services",
//   "/trade",
//   "/events",
//   "/resources",
//   "/membership",
//   "/support",
//   "/contact",
// ];

export default <RouterConfig>{
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      // Convoluted way to prevent default behaviour of browser # scrolling
      if (typeof to.hash == "string") {
        to.hash = to.hash.replace("Link", "");
      }

      const milliSeconds = from.path=='/'? 10: 100;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            top: 70,
            behavior: "smooth",
          });
        }, milliSeconds);
      });
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ top: 0 });
        }, 100);
      });
    }
  },
};
