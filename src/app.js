const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/kss", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connection successful..."))
  .catch((err) => console.log(err));

const playlistSchema=new mongoose.Schema({
    name: {
         type:String,
         required:true
    },
    ctype:String,
    videos:Number,
    author:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})
const Playlist=new mongoose.model("playlist",playlistSchema)

const createDocumnent=async()=>{
    try{
        const jsPlaylist=new Playlist({
            name:"react",
            ctype:"frontend",
            videos:50,
            author:"kaif shaikh",
            active:true

        })
        const mongoPlaylist=new Playlist({
            name:"mongodb",
            ctype:"database",
            videos:50,
            author:"kaif shaikh",
            active:true

        })
        const expressPlaylist=new Playlist({
            name:"expres js",
            ctype:"back end",
            videos:50,
            author:"kaif shaikh",
            active:true

        })
        const maths=new Playlist({
            name:"maths",
            ctype:"back end",
            videos:50,
            author:"kaif shaikh",
            active:true

        })
        const result=await Playlist.insertMany([jsPlaylist,mongoPlaylist, expressPlaylist,maths]);
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
createDocumnent();