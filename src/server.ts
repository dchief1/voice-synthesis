import app from "./app";
import configs from "./config/configs";

const server = app;

const port = configs.PORT;

server.listen(port, () => {
  console.log(`Server up and running, listening on http://localhost:${port}`);
});

export default server;
