var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Dinky Creek", image: "https://img.hipcamp.com/image/upload/c_limit,f_auto,h_1200,q_60,w_1920/v1437253898/campground-photos/ze5j6fmdo4uzszb9rnwr.jpg"},
    {name: "Gold Bluff", image: "https://img.hipcamp.com/image/upload/c_limit,f_auto,h_1200,q_60,w_1920/v1466469384/campground-photos/lun7jxuoz6tzqtgjx03y.jpg"},
    {name: "Donkey Punch", image: "http://dismalscanyon.com/campsites/images/sleeping_water_5177_900px.jpg"},
    {name: "Dinky Creek", image: "https://img.hipcamp.com/image/upload/c_limit,f_auto,h_1200,q_60,w_1920/v1437253898/campground-photos/ze5j6fmdo4uzszb9rnwr.jpg"},
    {name: "Gold Bluff", image: "https://img.hipcamp.com/image/upload/c_limit,f_auto,h_1200,q_60,w_1920/v1466469384/campground-photos/lun7jxuoz6tzqtgjx03y.jpg"},
    {name: "Donkey Punch", image: "http://dismalscanyon.com/campsites/images/sleeping_water_5177_900px.jpg"}
];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
        
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req,res){
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The TentTier server has started");
});