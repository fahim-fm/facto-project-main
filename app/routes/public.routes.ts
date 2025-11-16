import { index, route } from "@react-router/dev/routes";

export const publicRoutes = [
  index("pages/public/home.tsx"),
  route("about", "pages/public/about.tsx"),
];
