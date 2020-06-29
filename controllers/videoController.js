import { videos } from "../db";
import routes from "../routes";

// 이름이 home인 pug를 찾는다. view engine이 pug이므로
// rneder(템플릿, 전달할 객체)
export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};

export const search = (req, res) => {
  // term = req.query.term
  const {
    query: { term: searchingBy },
  } = req;
  // searchingBy: searchingBy
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = (req, res) => {
  const {
    body: { file, title, description },
  } = req;
  // To Do: Upload and save video
  res.redirect(routes.videoDetail(231432));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
