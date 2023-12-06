const express = require("express");
const router = express.Router();

const REPLACE_ME = "HELP REPLACE ME!!!!";

const {
  getAllVideoGames,
  getVideoGameById,
  createVideoGame,
  updateVideoGame,
  deleteVideoGame,
} = require("../db/videoGames");

// GET - /api/video-games - get all video games
router.get("/", async (req, res, next) => {
  try {
    const videoGames = await getAllVideoGames();
    res.send(videoGames);
  } catch (error) {
    next(error);
  }
});

// GET - /api/video-games/:id - get a single video game by id
router.get("/:id", async (req, res, next) => {
  try {
    const videoGame = await getVideoGameById(req.params.id);
    res.send(videoGame);
  } catch (error) {
    next(error);
  }
});

// POST - /api/video-games - create a new video game
router.post("/", async (req, res, next) => {
  // LOGIC GOES HERE
  //! Pass along all the data inside the body to the function.
  try {
    const videoGame = await createVideoGame(req.body);
    res.send(videoGame);
  } catch (error) {
    next(error);
  }
});

// PUT - /api/video-games/:id - update a single video game by id
router.put("/:id", async (req, res, next) => {
  // LOGIC GOES HERE
  //! Filter video games by id then match the keys to the keys inside the data the update only those with the data inside the param.
  try {
    const videoGame = await updateVideoGame(req.params.id, req.body);
    res.send(videoGame);
  } catch (error) {
    next(error);
  }
});

// DELETE - /api/video-games/:id - delete a single video game by id
router.delete("/:id", async (req, res, next) => {
  // LOGIC GOES HERE
  //! Pass the params [id] into the function to delete the video game.
  try {
    const videoGame = await deleteVideoGame(req.params.id);
    res.send(videoGame);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
