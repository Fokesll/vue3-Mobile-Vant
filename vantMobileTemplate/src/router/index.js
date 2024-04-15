import { createRouter, createWebHistory } from "vue-router";
import routes from "./route/routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 路由守卫
router.beforeEach(async (to, from, next) => {
  next();
});

router.afterEach(async (to, from, next) => {
 
});

export default router;
