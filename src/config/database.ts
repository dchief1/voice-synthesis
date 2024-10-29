import mongoose from "mongoose";
import configs from "./configs";

export const connectDatabase = () => {
  const databaseUrl = configs.DB_URL;

  mongoose.set("strictQuery", false);

  mongoose
    .connect(databaseUrl, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    })
    .then(() => {
      console.log("Connected to DB 😊");
    })
    .catch((error) => {
      console.log(`${error.name}: ${error.message}`);
    });
};
