const express = require("express");
const router = express.Router();
const UserPlaylist = require("../schema/UserPlaylists");
const PlaylistDetails = require("../schema/PlaylistDetails");

PlaylistDetails.collection.createIndex({ songId: 1 }, { unique: true });

router.post("/addPlaylist", async (req, res) => {
  try {
    const { userId, playlistName, playlistId } = req.body;
    const newPlaylist = await UserPlaylist.create({ userId, playlistName, playlistId });
    res.json(newPlaylist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post("/addSong", async (req, res) => {
  try {
    const { playlistId, trackName, artistName, trackId } = req.body;
    const songId = `${playlistId}_${trackId}`
    const newSong = await PlaylistDetails.create({ playlistId, trackName, artistName, trackId, songId });
    res.json(newSong);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get("/userPlaylists", async (req, res) => {
  try {
    const userId = req.query.userId; 
    const playlists = await UserPlaylist.find({ userId });
    res.json(playlists);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get("/playlistSongs", async (req, res) => {
  try {
    const playlistId = req.query.playlistId;
    const songs = await PlaylistDetails.find({ playlistId });
    res.json(songs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
