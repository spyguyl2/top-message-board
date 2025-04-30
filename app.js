//using Neon for db and render for website

import "dotenv/config";
import e from "express";
import path from "node:path";
import indexRouter from "./routes/index.js";
import newRouter from "./routes/new.js";
const app = e();

const __dirname = import.meta.dirname;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(e.static(path.join(__dirname, "styles")));
console.log(path.join(__dirname, "styles"));
app.use(e.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/new", newRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}! Yay!!!`);
});
