import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@weincode/mf-header",
  app: () => System.import("@weincode/mf-header"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@weincode/mf-main",
  app: () => System.import("@weincode/mf-main"),
  activeWhen: ["/main"]
});

registerApplication({
  name: "@weincode/mf-images",
  app: () => System.import("@weincode/mf-images"),
  activeWhen: ["/image"]
});



// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });
start({
  urlRerouteOnly: true,
});
