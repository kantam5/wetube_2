import app from "./app";
// 앱에 있는 get도 다 import된다.

const PORT = 4000;

const handleListening = () => {
  console.log(`listening on: http://loacalhost:4000`);
};

app.listen(PORT, handleListening);
