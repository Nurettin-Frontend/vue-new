import Vue from "vue";
import VueRouter from "vue-router";
const routes = [
  {
    path: "/",
    component: () => import("../layout/Sidebar"),
    children: [
      {
        path: "/",
        component: () => import("../views/home/Index.vue"),
      },
      {
        path: "/contact",
        component: () => import("../views/contact/Index"),
      },
      {
        path: "/projects",
        component: () => import("../views/projects/Index"),
      },
      {
        path: "/skills",
        component: () => import("../views/skills/Index"),
      },
    ],
  },
  // {
  //   path: "/error",
  //   component: () => import("../layout/NotFound.vue"),
  // },
  {
    path: "/*",
    redirect: "/",
  },
];

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
