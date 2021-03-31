const { updatePlayerOne, selectGame, updatePlayerTwo } = require("../models/model");

exports.getGame = (req, res, next) => {
    const { gameId } = req.params;
    selectGame(gameId)
        .then((game) => {
            res.status(200).send(game);
        })
        .catch(next)
}

exports.putPlayerOne = (req, res, next) => {
    const { name } = req.body;
    const { gameId } = req.params;
    console.log(`Starting game ${gameId} for player: ${name}.`);

    updatePlayerOne(name, gameId)
        .then(() => {
            res.sendStatus(202);
        })
        .catch(next); 
}

exports.putPlayerTwo = (req, res, next) => {
    const { name } = req.body;
    const { gameId } = req.params;
    updatePlayerTwo(name, gameId)
        .then(() => {
            res.sendStatus(202);
        })
        .catch(next); 
}