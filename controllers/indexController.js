import messages from "../messagesDB.js";

const indexController = {
  get: (req, res) => {
    res.render("index", { messages: messages });
  },
};

export default indexController;
