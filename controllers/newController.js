import messages from "../messagesDB.js";

const newController = {
  get: (req, res) => {
    res.render("form");
  },
  post: (req, res) => {
    messages.push({
      text: req.body.text,
      user: req.body.user,
      added: new Date(),
    });
    res.redirect("/");
  },
};

export default newController;
