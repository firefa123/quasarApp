const routes = [
  {
    path: "/",
    component: () => import("layouts/barAtas.vue"),
    children: [
      { path: "", component: () => import("pages/firefa.vue") },
      { path: "", component: () => import("pages/firefa.vue") },
      {
        path: "/profile/:id",
        name: "profile",
        component: () => import("pages/profile.vue")
      }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
