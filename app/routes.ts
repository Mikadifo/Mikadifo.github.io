import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route(":projectId", "routes/projects.tsx"),
] satisfies RouteConfig;
