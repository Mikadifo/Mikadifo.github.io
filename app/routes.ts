import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("layouts/CallToAction.tsx", [
    route(":projectId", "routes/projects.tsx"),
  ]),
] satisfies RouteConfig;
