import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "/allproducts",
        name: "AllProducts",
        component: () => import("@/views/AllProducts.vue"),
      },
      {
        path: "/Wishlist",
        name: "Wishlist",
        component: () => import("@/views/Wishlist.vue"),
      },
      {
        path: "/BooksCatalog",
        name: "BooksCatalog",
        component: () => import("@/views/BooksCatalog.vue"),
      },
      {
        path: "/bookdetails",
        name: "BookDetail",
        component: () => import("@/views/BookDetail.vue"),
      },
      {
        path: "/Login",
        name: "Login",
        component: () => import("@/views/Login.vue"),
      },
      {
        path: "/SignUp",
        name: "SignUp",
        component: () => import("@/views/SignUp.vue"),
      },
      {
        path: "/Checkout",
        name: "Checkout",
        component: () => import("@/views/Checkout.vue"),
      },
      {
        path: "/CartPage",
        name: "CartPage",
        component: () => import("@/views/CartPage.vue"),
      },
      {
        path: "/userdashboard",
        name: "userdashboard",
        component: () => import("@/views/UserDashboard.vue"),
        children: [
          {
            path: "userprofile",
            name: "UserProfile",
            component: () => import("@/views/UserProfile.vue"), // Create this component
          },
          {
            path: "myorders",
            name: "myorders",
            component: () => import("@/views/MyOrders.vue"), // Create this component
          },
          {
            path: "ReviewComponent/::order_id/:productName",
            name: "ReviewComponent",
            component: () => import("@/views/ReviewComponent.vue"), // Create this component
          },
          {
            path: "trackorder",
            name: "trackorder",
            component: () => import("@/views/TrackOrder.vue"), // Create this component
          },
        ],
      },
      {
        path: "/AdminDashboard",
        name: "AdminDashboard",
        component: () => import("@/views/AdminDashboard.vue"),
        children: [
          {
            path: "allorders",
            name: "allorders",
            component: () => import("@/views/AllOrders.vue"), // Create this component
          },
          {
            path: "allusers",
            name: "allusers",
            component: () => import("@/views/AllUsers.vue"), // Create this component
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
