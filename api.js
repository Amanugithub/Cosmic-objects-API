import express from "express"
import bodyParser from "body-parser"
import { readFileSync } from "fs";
import { isBooleanObject } from "util/types";

// Load datasets into memory
const asteroids_comets = JSON.parse(readFileSync("./json/asteroids_comets.json", "utf-8"));
const blackholes = JSON.parse(readFileSync("./json/blackholes.json", "utf-8"));
const constellations = JSON.parse(readFileSync("./json/constellations.json", "utf-8"));
const galaxies = JSON.parse(readFileSync("./json/galaxies.json", "utf-8"));
const planets = JSON.parse(readFileSync("./json/planets.json", "utf-8"));
const stars = JSON.parse(readFileSync("./json/stars.json", "utf-8"));

const cosmicData = {
    asteroids_comets : asteroids_comets,
    blackholes : blackholes,
    constellations : constellations,
    galaxies : galaxies,
    planets : planets,
    stars : stars
}

const API_URL = "http://localhost:4000"

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Get a random cosmic-object from any category
app.get("/cosmic-objects/random",(req,res)=>{
    const randomNumber = Math.trunc(Math.random() * 6 + 1 )
    switch (randomNumber) {
        case 1:
            const randomAsteroid = asteroids_comets[Math.trunc(Math.random() * asteroids_comets.length)]
            randomAsteroid.category = "asteroid/comet"
            res.json(randomAsteroid)
            break;
        case 2:
            const randomBlackhole = blackholes[Math.trunc(Math.random() * blackholes.length)]
            randomBlackhole.category = "blackhole"
            res.json(randomBlackhole)
            break;
        case 3:
            const randomConstellation = constellations[Math.trunc(Math.random() * constellations.length)]
            randomConstellation.category = "constellation"
            res.json(randomConstellation)
            break;
        case 4:
            const randomGalaxy = galaxies[Math.trunc(Math.random() * galaxies.length)]
            randomGalaxy.category = "galaxy"
            res.json(randomGalaxy)
            break;
        case 5:
            const randomPlanet = planets[Math.trunc(Math.random() * planets.length)]
            randomPlanet.category = "planet"
            res.json(randomPlanet)
            break;
        case 6:
            const randomStar = stars[Math.trunc(Math.random() * stars.length)]
            randomStar.category = "star"
            res.json(randomStar)
            break;
    }

})

//Get a random object from a specific category

app.get('/cosmic-objects/random/:category',(req,res)=>{
    
    const category = req.params.category.toLowerCase();
    const dataSet = cosmicData[category];
    console.log(dataSet);
    if(!dataSet){
        return res.status(404).json({error: "category not found"})
    }

    res.json(dataSet[Math.trunc(Math.random() * dataSet.length)])
})
//Get a specific object by id

//get 
app.listen(port,()=>{
    console.log(`server is listening on port ${port}...\nclick ${API_URL} to open the browser.` );
})