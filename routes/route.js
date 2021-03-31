const router = require("express").Router();
const { putPlayerOne, getGame, putPlayerTwo } = require("../controllers/controller");

router
    .route("/:gameId")
    .get(getGame)

router
    .route("/:gameId/player1")
    .put(putPlayerOne)

router
    .route("/:gameId/player2")
    .put(putPlayerTwo)

module.exports = router;