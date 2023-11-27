const mongoose = require('mongoose');

const playlistDetailsSchema = new mongoose.Schema({
  playlistId: {
    type: String,
    required: true,
  },
  trackName: {
    type: String,
    required: true,
  },
  artistName: {
    type: String,
    required: true,
  },
  trackId: {
    type: String,
    required: true,
  },
  songId: {
    type: String,
    required: true,
    unique: true,
  },
});

const PlaylistDetails = mongoose.model('PlaylistDetails', playlistDetailsSchema);

module.exports = PlaylistDetails;
