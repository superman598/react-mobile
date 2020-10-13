import React from "react";

const Home = React.lazy(() => import("../pages/Home/index"));
const Login = React.lazy(() => import("../pages/Login/index"));
const RegisterPhone = React.lazy(() =>
  import("../pages/Register/RegisterPhone")
);
const RegisterCountry = React.lazy(() =>
  import("../pages/Register/RegisterCountry")
);

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register/phone",
    component: RegisterPhone,
  },
  {
    path: "/register/country",
    component: RegisterCountry,
  },
];

export default routes;
