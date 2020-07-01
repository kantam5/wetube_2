import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is required",
  },
  title: {
    type: String,
    required: "Title is required",
  },
  description: String,
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // 모든 comment를 비디오와 결합 or comment에 videoID를 준다.
  comments: [
    {
      // 어느 모델에서 왔는지
      type: mongoose.Schema.Types.ObjectId,
      ref: "Commnet",
    },
  ],
});

const model = mongoose.model("Video", VideoSchema);
export default model;
