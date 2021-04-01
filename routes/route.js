const router = require("express").Router();
const { putPlayerOne, getGame, putPlayerTwo, putPlayerMove } = require("../controllers/controller");

router
    .route("/:gameId")
    .get(getGame)

router
    .route("/:gameId/player1")
    .put(putPlayerOne)

router
    .route("/:gameId/player2")
    .put(putPlayerTwo)

router
    .route("/:gameId/:player/move/:squareIndex")
    .put(putPlayerMove)

module.exports = router;