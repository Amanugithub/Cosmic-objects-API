import express from "express"
import bodyParser from "body-parser"
import { readFileSync } from "fs";

// Load datasets into memory
const asteroids_comets = JSON.parse(readFileSync("./json/asteroids_comets.json", "utf-8"));
const blackholes = JSON.parse(readFileSync("./json/blackholes.json", "utf-8"));
const constellations = JSON.parse(readFileSync("./json/constellations.json", "utf-8"));
const galaxies = JSON.parse(readFileSync("./json/galaxies.json", "utf-8"));
const planets = JSON.parse(readFileSync("./json/planets.json", "utf-8"));
const stars = JSON.parse(readFileSync("./json/stars.json", "utf-8"));

//Get a random cosmic-object from any category
