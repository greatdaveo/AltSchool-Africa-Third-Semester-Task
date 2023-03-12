// import ReposList from "@/components/ReposList.vue";

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ReposPage from "../pages/ReposPage.vue";
import DetailsPage from "@/pages/DetailsPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/repositories",
    name: "ReposPage",
    component: ReposPage,
  },
  {
    path: "/repository/details/:name",
    name: "DetailsPage",
    component: DetailsPage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
