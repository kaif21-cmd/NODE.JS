//npm init -y
// npm install express

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    //res.send("Hello from the express")
    res.write("<h1>Hello from the express</h1>") //sending html elements  into  the server
});
app.get('/about', (req, res) => {
    res.send("Hello from the  about page express")
});
app.get('/contact', (req, res) => {
    res.send("Hello from the  about page express contact us on 9648338838")
});
app.get('/data', (req, res) => { //sending the jason data into the server
    res.send({
        id: 1,
        name: "kaif",
        department: "CSE",
        section: "D"
    });
});
app.get('/data1', (req, res) => { //sending the Array data into the server kitna bhi data send krlo
    res.send([
        {
            id: 1,
            name: "kaif",
            department: "CSE",
            section: "c"
        },
        {
            id: 2,
            name: "zara",
            department: "CSE",
            section: "D"
        },
        {
            id: 3,
            name: "shahrukh",
            department: "CSE",
            section: "D"
        },
        {
            id: 4,
            name: "zaid",
            department: "CSE",
            section: "D"
        },
        {
            id: 5,
            name: "Anas",
            department: "CSE",
            section: "A"
        },
        {
            id: 6,
            name: "Shahan",
            department: "CSE",
            section: "D"
        },
    ]);
});
app.listen(8001, () => {
    console.log("Sever Is running Succesfully Crime is now live")
});



/*
API----
GET-> THE DATA READING GET THE DATA FROM SERVER
POST->CREATE NEW DATA
PUT->UPDATE THE DATA 
DELETE->SIMPLE DELETE THE DATA
THAT KNOWN AS CURD OPERATIONS

BASICALLY EXPRESS IS USED TO CREATING THE API'S MODEL
*/
