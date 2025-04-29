import { insertMessage } from "../db/queries.js";

const newController = {
  get: (req, res) => {
    res.render("form");
  },
  post: (req, res) => {
    const message = {
      username: req.body.username,
      text: req.body.text,
    };

    insertMessage(message);
    res.redirect("/");
  },
};

export default newController;
