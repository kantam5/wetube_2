import routes from "./routes";

// 로컬을 전역으로 변경, pug에서 사용가능하도록
export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  next();
};
