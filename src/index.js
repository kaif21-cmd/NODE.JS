const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Hamdard", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connection successful..."))
  .catch((err) => console.log(err));

const playlistSchema=new mongoose.Schema({
    name: {
         type:String,
         required:true
    },
    department:String,
    Enrollment:Number,
    section:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})
const Playlist=new mongoose.model("record",playlistSchema)

const createDocumnent=async()=>{
    try{
        const ksPlaylist=new Playlist({
            name:"Kaif",
            department:"CSE",
            Enrollment:153,
            active:true

        })
        const zrPlaylist=new Playlist({
            name:"zara",
            department:"CSE",
            Enrollment:153,
            active:true

        })
        const skPlaylist=new Playlist({
            name:"Sharukh",
            department:"CSE",
            Enrollment:207,
            active:true

        })
        const zaPlaylist=new Playlist({
            name:"Zaid",
            department:"CSE",
            Enrollment:248,
            active:true

        })
        const aaPlaylist=new Playlist({
            name:"Anas",
            department:"CSE",
            Enrollment:031,
            active:true

        })
        const saPlaylist=new Playlist({
            name:"shahan",
            department:"CSE",
            Enrollment:237,
            active:true

        })
        const uvPlaylist=new Playlist({
            name:"uves",
            department:"CSE",
            Enrollment:237,
            active:true

        })
        const result=await Playlist.insertMany([ksPlaylist,zrPlaylist,skPlaylist,zaPlaylist,aaPlaylist,saPlaylist,uvPlaylist]);
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
createDocumnent();
/*const getDocument=async()=>{
    const result=await Playlist.find({name:"Kaif"})
    console.log(result)
}
*/
//getDocument();



