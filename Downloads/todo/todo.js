const express = require("express");
const app = express();
require("./db/conn")



// app.get('/', (req, res) => {
//     res.render('todo');
// });
app.set("view engine", "ejs");

app.use("/static", express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routes/index'))

app.listen(3000, () => console.log("Server Up and running"));