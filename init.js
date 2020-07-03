import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
//import "./models/video";
import "./models/Comment";
// 앱에 있는 get도 다 import된다.

const PORT = process.env.PORT || 4000;

const handleListening = () => {
  console.log(`listening on: http://loacalhost:4000`);
};

app.listen(PORT, handleListening);
