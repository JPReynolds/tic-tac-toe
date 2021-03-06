const fileName = "./game.json";
const fs = require("fs").promises;

exports.updatePlayerOne = (player1, gameId) => {
    return fs.readFile(fileName, "utf8").then((games) => {
        const newGame = [...JSON.parse(games), { gameId, player1, player2: null }]
        return fs.writeFile(fileName, JSON.stringify(newGame), "utf8")
    })
}

exports.updatePlayerTwo = (name, gameId) => {
    return fs.readFile(fileName, "utf8").then((games) => {
        const parsedGames = JSON.parse(games);
        const gameIndex = parsedGames.findIndex(g => g.gameId === gameId);

        if (gameIndex === -1) {
            return Promise.reject({ status: 404, msg: "invalid gameId" })
        } else if (parsedGames[gameIndex].player2) {
            return Promise.reject({ status: 409, msg: "Another player has already joined this game" })
        }

        parsedGames[gameIndex] = {...parsedGames[gameIndex], player2: name, state: "ready", board: new Array(9)};
        return fs.writeFile(fileName, JSON.stringify(parsedGames), "utf8")
    })
}

exports.selectGame = (gameId) => {
    return fs.readFile(fileName, "utf8").then((games) => {
        const game = JSON.parse(games).find(g => g.gameId === gameId);
        if (!game) {
            return Promise.reject({ status: 404, msg: "Invalid gameId" });
        } else {
            return game;
        }
    })
}

exports.updatePlayerMove = (gameId, player, squareIndex) => {
    return fs.readFile(fileName, "utf8").then((games) => {
        const parsedGames = JSON.parse(games);
        const gameIndex = parsedGames.findIndex(g => g.gameId === gameId);
        const currentBoard = parsedGames[gameIndex].board;

        if (currentBoard[squareIndex]) {
            return Promise.reject({ status: 404, msg: "Square already taken" });
        } else if (squareIndex > currentBoard.length - 1) {
            return Promise.reject({ status: 404, msg: "Invalid square" });
        } else {
            parsedGames[gameIndex].board[squareIndex] = player === "player1" ? "X" : "0";
            return fs.writeFile(fileName, JSON.stringify(parsedGames), "utf8");
        }

    })
}