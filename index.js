const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")

const userRoutes = require('./userRoutes/userRoutes')
const playlistRoutes = require('./playlistRoutes/playlistRoutes')


const app = express()
app.use(express.json())
app.use(cors())

mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://arpitbaheti:santoshBaheti02@appu.u6vqlco.mongodb.net/VibesVault")

const db = mongoose.connection;
db.on("open", ()=>{
  console.log("database connected");
});
db.on("error", ()=>{
  console.log("error in connectiong to database");
});

app.use("/users", userRoutes);
app.use("/playlists", playlistRoutes);

const port = process.env.PORT || 5500;

app.listen(port, () => {
  console.log("server is running")
})

