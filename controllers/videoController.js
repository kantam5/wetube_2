import routes from "../routes";
// element를 받는 통로인 VIdeo model
import Video from "../models/Video";

// 이름이 home인 pug를 찾는다. view engine이 pug이므로
// rneder(템플릿, 전달할 객체)
export const home = async (req, res) => {
  try {
    // db의 모든 video를 찾는다.
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
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

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
  });
  console.log(newVideo);
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("videoDetail", { pageTitle: "Video Detail", video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
