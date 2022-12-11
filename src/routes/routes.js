const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.redirect("emitir.html");
});

module.exports = router;
