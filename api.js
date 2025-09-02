import express from "express"
import bodyParser from "body-parser"
import { readFileSync } from "fs";
import { isBooleanObject } from "util/types";
import { type } from "os";

// Load datasets into memory
const asteroids_comets = JSON.parse(readFileSync("./json/asteroids_comets.json", "utf-8"));
const blackholes = JSON.parse(readFileSync("./json/blackholes.json", "utf-8"));
const constellations = JSON.parse(readFileSync("./json/constellations.json", "utf-8"));
const galaxies = JSON.parse(readFileSync("./json/galaxies.json", "utf-8"));
const planets = JSON.parse(readFileSync("./json/planets.json", "utf-8"));
const stars = JSON.parse(readFileSync("./json/stars.json", "utf-8"));

const typesOfAsteroids_Comets = new Set(asteroids_comets.map(o => o.type));
const typesOfBlackholes      = new Set(blackholes.map(o => o.type));
const typesOfConstellations  = new Set(constellations.map(o => o.type));
const typesOfGalaxies        = new Set(galaxies.map(o => o.type));
const typesOfPlanets         = new Set(planets.map(o => o.type));
const typesOfStars           = new Set(stars.map(o => o.type));

const typeSets = {
    asteroids_comets: typesOfAsteroids_Comets,
    blackholes: typesOfBlackholes,
    constellations: typesOfConstellations,
    galaxies: typesOfGalaxies,
    planets: typesOfPlanets,
    stars: typesOfStars
};

const cosmicData = {
    asteroids_comets : asteroids_comets,
    blackholes : blackholes,
    constellations : constellations,
    galaxies : galaxies,
    planets : planets,
    stars : stars
}

function generateRandomObject(obj){
    const keys = Object.keys(obj);//array containing the keys of the object
    const randomKey = Math.trunc(Math.random() * keys.length)//gets a random index from the keys array
    const randomDataSet = obj[keys[randomKey]];
    const randomObject = randomDataSet[Math.trunc(Math.random() * randomDataSet.length)]
    randomObject.category = keys[randomKey]; 
    return randomObject;
}
function handlePagination(page,limit,results){
    const pageNum = Math.max(1, parseInt(page) || 1);
    const limitNum = Math.max(1, parseInt(limit) || 10);
    const startIndex = (pageNum - 1) * limitNum
    const endIndex = startIndex + limitNum;
    return results.slice(startIndex,endIndex)
}
const API_URL = "http://localhost:4000"

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Get a random cosmic-object from any category
app.get("/cosmic-objects/random",(req,res)=>{

   const randomObjectToBeSent = generateRandomObject(cosmicData)
   res.json(randomObjectToBeSent)

})

//Get a random object from a specific category

app.get('/cosmic-objects/random/:category',(req,res)=>{
    
    const category = req.params.category.toLowerCase();
    const dataSet = cosmicData[category];
    if(!dataSet){
        return res.status(404).json({error: "category not found"})
    }

    res.json(dataSet[Math.trunc(Math.random() * dataSet.length)])
})

// filter by type property and return and array objects that fulfil that condition

app.get('/cosmic-objects/filter/:category', (req, res) => {
    const category = req.params.category.toLowerCase();
    const { type , page = 1 , limit = 10 } = req.query;
    console.log(type);
    const dataSet = cosmicData[category];
    if (!dataSet) {
        return res.status(404).json({ error: "category not found" });
    }

    // Check if type is valid for this category
    if (type) {
        const validTypes = typeSets[category];
        if (!validTypes || !validTypes.has(type)) {
            return res.status(404).json({ error: "unavailable type for this category" });
        }
    }

    // Apply filters dynamically
    let results = dataSet.filter(obj => {
        if (type && obj.type.toLowerCase() !== type.toLowerCase()) return false;
        return true;
    });
   const paginatedResults = handlePagination(page,limit,results);
    res.json(paginatedResults);
});

//Get a specific object by id

app.get('/cosmic-objects/:category/:id',(req,res)=>{
    //catch the parameters
    const category = req.params.category.toLowerCase();
    const id = parseInt(req.params.id)
    console.log(category , id);
    //select the category
    const dataSet = cosmicData[category];
    if (!dataSet){
        return res.status(404).json({error: "category not found"})
    }
    //find the object with the required id in that category
    const thatObject = dataSet.find(object=> object.id === id);
    if(!thatObject){
        return res.status(404).json({error: "object with the specified id not found"})
    }
    res.json(thatObject);
    })

    //Get all objects of a specific category with pagination
    app.get('/cosmic-objects/:category',(req,res)=>{
        const category =req.params.category;
        const { page = 1 , limit = 10 } = req.query;
        const dataSet = cosmicData[category];
        if(!dataSet){
            return res.status(404).json({error: "category not found."})
        }
        const paginatedDataSet = handlePagination(page,limit,dataSet);
        res.json(paginatedDataSet)
    })
    //Search by name the entire database for cosmic object that match the provided name
    app.get('/cosmic-objects',(req,res)=>{
        const { objectName , category , page = 1 , limit = 10 } = req.query;
        console.log(objectName,category);
       
        if(objectName){
            if(category){//if category is provided
    
                const dataSet = cosmicData[category];//pick the dataSet
                if(!dataSet)//check if the dataset with the provided category exists
                    return res.status(404).json({error: "category not found."})
            
                 //search from a particular category and collect the matches
                const matches = dataSet.filter((obj) => {
                    return obj.name.toLowerCase().includes(objectName.toLowerCase())})
                res.json(handlePagination(page,limit,matches))

            } else {
                //search the entire database for matches
                const matches = [];
                for (const key in cosmicData){
                    const results = cosmicData[key].filter((obj) => {
                        return obj.name.toLowerCase().includes(objectName.toLowerCase())})
                    matches.push(...results)
                }
                res.json(handlePagination(page,limit,matches));
            }

        } else {
            res.status(400).json({error: "objectName must be provided"})
        }
})
app.listen(port,()=>{
    console.log(`server is listening on port ${port}...\nclick ${API_URL} to open the browser.` );
})