const express = require("express");
const path = require("path");
const exportJson = require("./ExportJson.json");
const myfuncs = require("./helpers/myfuncs.js");

const app = express();

app.use(express.static(path.join(__dirname, "node_modules/bulma")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


let title = "Not defined"

// Avaleht
app.get("/", (req, res) => {
  title = "Data table";
  res.render("index.ejs", {
    exportJson,
    myfuncs,
    title
  });
});

// Detailse info kuvamine
app.get("/:id", (req, res) => {
  const {
    id
  } = req.params;
  let find = false;
  for (let ej of exportJson.objects) {
    if (ej.ID === id) {
      find = true;
      const data = exportJson.objects.find(ej => ej.ID === id);
      title = "Show data";
      res.render("data", {
        title,
        myfuncs,
        data
      });
    }
  }
  if (find == false) {
    title = "Error 404",
      res.render("404datainfo", {
        title
      });
  }
});


//Serveri käivitamine pordil 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
