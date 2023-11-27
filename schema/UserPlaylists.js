const mongoose = require('mongoose');

const userPlaylistSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  playlistName: { type: String, required: true },
  playlistId: { type: String, required: true },
});

const UserPlaylist = mongoose.model('UserPlaylist', userPlaylistSchema);

module.exports = UserPlaylist;
