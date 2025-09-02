# Project: Cosmic-objects API
gives up to date and accurate scientific info on nearly 500 cosmic objects.

- 60 asteroids and comets
    
- 30 Blackholes
    
- 88 constellations
    
- 50 galaxies
    
- 150 Planets
    
- 50 Stars

## End-point: Random object of any type
Returns a random cosmic object of any category. (asteroids,comets,blackholes,galaxies,constellations,stars,planets)

``` curl
http://localhost:4000/cosmic-objects/random

 ```
### Method: GET
>```
>undefined
>```
### Response: 200
<details open style="width: fit-content; max-height: 600px; overflow: auto">
<summary>Response example:</summary>

```json
{
    "id": 64,
    "name": "Phoenix",
    "abbreviation": "Phe",
    "genitive": "Phoenicis",
    "type": "southern",
    "area_sq_deg": 469,
    "brightest_star": "Ankaa",
    "brightest_star_magnitude": 2.39,
    "number_of_main_stars": 4,
    "number_of_stars_with_planets": 1,
    "messier_objects": [],
    "visible_latitude_range": "-90° to +32°",
    "best_visible_month": "November",
    "description": "Phoenix is a southern constellation introduced by Dutch navigators in the late 16th century. Its brightest star, Ankaa, has magnitude 2.39. Phoenix contains few notable deep-sky objects, primarily small star clusters. Representing the mythical phoenix bird, the constellation is best observed during southern spring evenings. Its modest star pattern forms a simple bird shape, which is most easily recognized in dark skies.",
    "category": "constellations"
}
```
</details>


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Random object of a specific category
Returns a single random cosmic object from the specified category.  
_category parameters:_

- asteroids_comets
    
- blackholes
    
- constellations
    
- galaxies
    
- planets
    
- stars
    

``` html
http://localhost:4000/cosmic-objects/random/{category}

 ```
### Method: GET
>```
>undefined
>```
### Response: 200
<details open style="width: fit-content; max-height: 600px; overflow: auto">
<summary>Response example:</summary>

```json
{
    "id": 16,
    "name": "Cygnus X-3",
    "type": "stellar-mass",
    "mass": "10 M☉",
    "distance_from_earth": "23,000 light years",
    "host_galaxy": "Milky Way",
    "discovery_method": "X-ray observation",
    "description": "Cygnus X-3 is a high-mass X-ray binary containing a stellar-mass black hole. It exhibits strong X-ray and radio emissions and is notable for its relativistic jets, providing a laboratory for studying accretion and jet physics in black hole binaries."
}
```
</details>


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Filter by type
returns an array of objects that match the specified type parameter.category of the cosmic object must be specified in the request URL and then the type of that object.

types parameters differ depending on the category of the cosmic object.

- **asteroids_comets:** asteroid , comet
    
- **blackholes:** stellar-mass , supermassive , intermediate-mass
    
- **constellations:** northern , southern
    
- **galaxies:** spiral , elliptical , barred , spiral , lenticular , starburst , irregular
    
- **planets:** Super-Earth , Hot Jupiter , Ultra-Inflated Jupiter , Terrestrial , Mini-Neptune , Hot Neptune , Earth-like , Gas Giant , Neptune-like , Ice Giant
    
- **stars:** Main Sequence Star (A-type) , Red Supergiant , Red Dwarf (M-type) , Blue Supergiant , Yellow Supergiant (Cepheid Variable) , Red Giant , Yellow Giant (G-type) , White Dwarf (DA2)
    

endpoint also supports pagination by default.

- default page = 1
    
- default limit per page = 10 objects
    

``` html
http://localhost:4000/cosmic-objects/filter/{category}/?type=""&page=""&limit=""

 ```
### Method: GET
>```
>undefined
>```
### Response: 200
<details open style="width: fit-content; max-height: 600px; overflow: auto">
<summary>Response example:</summary>

```json
[
    {
        "id": 7,
        "name": "Aldebaran",
        "type": "Red Giant",
        "distance_from_earth": "65 light years",
        "mass": "1.16 M☉",
        "radius": "44.2 R☉",
        "temperature": "3,900 K",
        "discovered_by": "Ancient Astronomers",
        "discovery_date": "Antiquity",
        "description": "Aldebaran is the brightest star in the constellation Taurus, often appearing as the fiery 'eye' of the bull. As a red giant, Aldebaran has expanded significantly from its main sequence size and now shines with a warm orange hue. It is an evolved star nearing the later stages of its life cycle. Aldebaran’s brightness and distinctive color have made it a prominent feature in cultural mythologies, navigation, and astronomy. Its relatively close distance to Earth makes it an important benchmark for studying red giant properties."
    },
    {
        "id": 9,
        "name": "Arcturus",
        "type": "Red Giant",
        "distance_from_earth": "36.7 light years",
        "mass": "1.08 M☉",
        "radius": "25.4 R☉",
        "temperature": "4,290 K",
        "discovered_by": "Ancient Astronomers",
        "discovery_date": "Antiquity",
        "description": "Arcturus, the brightest star in the constellation Boötes, is a red giant nearing the end of its hydrogen-burning phase. Its golden-orange glow makes it easily recognizable in the northern hemisphere’s sky. Arcturus has been extensively studied due to its relative proximity and brightness, providing astronomers with valuable insights into the evolution of Sun-like stars. It is also historically significant, as its light was used to open the 1933 Chicago World's Fair, highlighting humanity’s enduring fascination with the stars."
    }
]
```
</details>


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get a specific object by id
request for an object using the associated id

``` curl
http://localhost:4000/cosmic-objects/{category}/id

 ```
### Method: GET
>```
>undefined
>```
### Response: 200
<details open style="width: fit-content; max-height: 600px; overflow: auto">
<summary>Response example:</summary>

```json
{
    "id": 144,
    "name": "Mars",
    "type": "Terrestrial",
    "mass": 6.42e+23,
    "radius": 3389,
    "distance_from_star": 227.9,
    "star_system": "Solar System",
    "galaxy": "Milky Way",
    "moons": [
        "Phobos",
        "Deimos"
    ],
    "description": "Mars, the Red Planet, has evidence of ancient water flows, polar ice caps, and the tallest volcano in the Solar System, Olympus Mons."
}
```
</details>


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get all objects of a specific category with pagination
Returns all objects of the requested category as an array of objects.

endpoint also supports pagination by default.

- default page = 1
    
- default limit per page = 10 objects
    

``` html
http://localhost:4000/cosmic-objects/{category}?page=""&limit=""

 ```
### Method: GET
>```
>undefined
>```
### Response: 200
<details open style="width: fit-content; max-height: 600px; overflow: auto">
<summary>Response example:</summary>

```json
[
    {
        "id": 1,
        "name": "Andromeda",
        "abbreviation": "And",
        "genitive": "Andromedae",
        "type": "northern",
        "area_sq_deg": 722,
        "brightest_star": "Alpheratz",
        "brightest_star_magnitude": 2.06,
        "number_of_main_stars": 18,
        "number_of_stars_with_planets": 3,
        "messier_objects": [
            "M31",
            "M32",
            "M110"
        ],
        "visible_latitude_range": "-40° to +90°",
        "best_visible_month": "November",
        "description": "Andromeda is a northern constellation located near the celestial equator, bordered by Cassiopeia, Pegasus, and Perseus. Its most famous deep-sky object is the Andromeda Galaxy (M31), the nearest spiral galaxy to the Milky Way, visible to the naked eye under dark skies. Mythologically, Andromeda represents the princess chained to a rock to be sacrificed to a sea monster, rescued by Perseus. Observers can trace the main stars forming a distinct chain and enjoy galaxy observation using binoculars or a small telescope. Notable stars include Alpheratz (Alpha Andromedae) and Mirach (Beta Andromedae)."
    },
    {
        "id": 2,
        "name": "Antlia",
        "abbreviation": "Ant",
        "genitive": "Antliae",
        "type": "southern",
        "area_sq_deg": 239,
        "brightest_star": "Alpha Antliae",
        "brightest_star_magnitude": 4.25,
        "number_of_main_stars": 3,
        "number_of_stars_with_planets": 0,
        "messier_objects": [],
        "visible_latitude_range": "-90° to +40°",
        "best_visible_month": "April",
        "description": "Antlia is a faint southern constellation representing an air pump, located south of Hydra and north of Pyxis. It is relatively obscure with no particularly bright stars, though Alpha Antliae is the most prominent at magnitude 4.25. The constellation contains a few small galaxies observable with medium telescopes. Introduced in the 18th century by Nicolas-Louis de Lacaille, Antlia reflects the era's fascination with scientific instruments. Its low brightness makes it a challenge for casual stargazers, so dark skies are recommended for observation."
    },
    {
        "id": 3,
        "name": "Apus",
        "abbreviation": "Aps",
        "genitive": "Apodis",
        "type": "southern",
        "area_sq_deg": 206,
        "brightest_star": "Alpha Apodis",
        "brightest_star_magnitude": 3.83,
        "number_of_main_stars": 4,
        "number_of_stars_with_planets": 0,
        "messier_objects": [],
        "visible_latitude_range": "-90° to 10°",
        "best_visible_month": "July",
        "description": "Apus is a southern constellation representing the bird of paradise, located near Triangulum Australe and Chamaeleon. It is small and faint, with the brightest star Alpha Apodis barely visible to the naked eye in good conditions. No Messier objects are located here, but some distant galaxies can be seen through telescopes. Apus was named by Dutch navigators in the late 16th century and symbolizes exotic fauna of the Southern Hemisphere. Best viewed in mid-winter months of the southern skies, it is appreciated mainly by enthusiasts seeking to complete all 88 constellations."
    },
    {
        "id": 4,
        "name": "Aquarius",
        "abbreviation": "Aqr",
        "genitive": "Aquarii",
        "type": "southern",
        "area_sq_deg": 980,
        "brightest_star": "Beta Aquarii",
        "brightest_star_magnitude": 2.91,
        "number_of_main_stars": 11,
        "number_of_stars_with_planets": 8,
        "messier_objects": [
            "M2",
            "M72",
            "M73"
        ],
        "visible_latitude_range": "-90° to +65°",
        "best_visible_month": "October",
        "description": "Aquarius, one of the largest constellations, represents the water-bearer and lies in the celestial region known as the Sea due to many water-themed constellations nearby. Its notable stars include Beta Aquarii (Sadalsuud) and Alpha Aquarii (Sadalmelik). Aquarius hosts several interesting deep-sky objects, such as the globular cluster M2 and the planetary grouping M73. Historically, it was associated with various water deities across cultures, including the Greek Ganymede myth. Observing Aquarius is best done during autumn months in both hemispheres, under dark skies, as its stars are relatively faint."
    },
    {
        "id": 5,
        "name": "Aquila",
        "abbreviation": "Aql",
        "genitive": "Aquilae",
        "type": "northern",
        "area_sq_deg": 652,
        "brightest_star": "Altair",
        "brightest_star_magnitude": 0.77,
        "number_of_main_stars": 9,
        "number_of_stars_with_planets": 5,
        "messier_objects": [],
        "visible_latitude_range": "-75° to +90°",
        "best_visible_month": "August",
        "description": "Aquila is a prominent northern constellation representing the eagle, lying along the Milky Way near Cygnus and Sagittarius. Altair, one of the closest bright stars to Earth, forms part of the Summer Triangle with Deneb and Vega. Aquila contains several double stars and open clusters visible with amateur telescopes. In mythology, the eagle carried Zeus' thunderbolts. Best viewed in late summer evenings, the constellation’s main stars form a striking line, making it easy for observers to identify in the Milky Way’s rich star fields."
    },
    {
        "id": 6,
        "name": "Ara",
        "abbreviation": "Ara",
        "genitive": "Arae",
        "type": "southern",
        "area_sq_deg": 237,
        "brightest_star": "Beta Arae",
        "brightest_star_magnitude": 2.85,
        "number_of_main_stars": 7,
        "number_of_stars_with_planets": 1,
        "messier_objects": [],
        "visible_latitude_range": "-90° to +25°",
        "best_visible_month": "July",
        "description": "Ara, the altar, is a small southern constellation located near Scorpius and Triangulum Australe. Its brightest star, Beta Arae, is an orange giant of magnitude 2.85. The constellation contains several small star clusters observable with amateur telescopes. Historically, it represented the altar where the gods made offerings in Greek mythology. Ara is best seen in winter months of the Southern Hemisphere and is a favorite among constellation completists due to its relative obscurity and southern position."
    },
    {
        "id": 7,
        "name": "Aries",
        "abbreviation": "Ari",
        "genitive": "Arietis",
        "type": "northern",
        "area_sq_deg": 441,
        "brightest_star": "Hamal",
        "brightest_star_magnitude": 2,
        "number_of_main_stars": 4,
        "number_of_stars_with_planets": 3,
        "messier_objects": [],
        "visible_latitude_range": "-60° to +90°",
        "best_visible_month": "December",
        "description": "Aries, representing the ram, is a northern zodiac constellation situated between Pisces and Taurus. Its main stars, Hamal, Sheratan, and Mesarthim, define a simple arc. Aries contains a few faint galaxies observable with telescopes. In Greek mythology, it represents the golden ram that rescued Phrixus and Helle. Zodiac enthusiasts often track the Sun’s passage through Aries during March, marking the vernal equinox. Observing in winter evenings offers clear views of its modest star pattern."
    },
    {
        "id": 8,
        "name": "Auriga",
        "abbreviation": "Aur",
        "genitive": "Aurigae",
        "type": "northern",
        "area_sq_deg": 657,
        "brightest_star": "Capella",
        "brightest_star_magnitude": 0.08,
        "number_of_main_stars": 6,
        "number_of_stars_with_planets": 7,
        "messier_objects": [
            "M36",
            "M37",
            "M38"
        ],
        "visible_latitude_range": "-50° to +90°",
        "best_visible_month": "February",
        "description": "Auriga, the charioteer, is a prominent northern constellation with the bright star Capella, one of the brightest in the night sky. It contains several open clusters including M36, M37, and M38, which are popular targets for amateur astronomers. Historically linked to the mythological charioteer Erichthonius, Auriga is easily spotted due to its pentagon shape. Best observed during winter months, its bright stars stand out against the Milky Way backdrop, making it suitable for naked-eye and telescopic observations."
    },
    {
        "id": 9,
        "name": "Boötes",
        "abbreviation": "Boo",
        "genitive": "Boötis",
        "type": "northern",
        "area_sq_deg": 907,
        "brightest_star": "Arcturus",
        "brightest_star_magnitude": -0.05,
        "number_of_main_stars": 7,
        "number_of_stars_with_planets": 9,
        "messier_objects": [
            "M3"
        ],
        "visible_latitude_range": "-50° to +90°",
        "best_visible_month": "May",
        "description": "Boötes, the herdsman, is a northern constellation located near Virgo and Corona Borealis. Its most notable star, Arcturus, is the fourth-brightest star in the sky and an orange giant. Boötes contains the bright globular cluster M3, observable with small telescopes. The constellation has been associated with agricultural myths and pastoral imagery across cultures. Best seen in spring, Boötes’ distinctive kite shape helps in identifying it among surrounding stars."
    },
    {
        "id": 10,
        "name": "Caelum",
        "abbreviation": "Cae",
        "genitive": "Caeli",
        "type": "southern",
        "area_sq_deg": 125,
        "brightest_star": "Alpha Caeli",
        "brightest_star_magnitude": 4.45,
        "number_of_main_stars": 4,
        "number_of_stars_with_planets": 0,
        "messier_objects": [],
        "visible_latitude_range": "-90° to +20°",
        "best_visible_month": "December",
        "description": "Caelum is a faint southern constellation representing the engraver’s chisel, located near Eridanus and Dorado. It contains few stars brighter than magnitude 5, with Alpha Caeli being the brightest at 4.45. Caelum has no Messier objects but includes some distant galaxies visible with medium telescopes. Introduced in the 18th century by Nicolas-Louis de Lacaille, Caelum is an example of a modern constellation reflecting scientific instruments. Observers should use dark skies to view its subtle pattern."
    }
]
```
</details>


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Search the database by name
returns objects with the exact orpartial matches of the specified objectName.

endpoint also supports pagination by default.

- default page = 1
    
- default limit per page = 10 objects
    

``` html
http://localhost:4000/cosmic-objects?objectName=""&category=""



 ```
### Method: GET
>```
>undefined
>```
### Response: 200
<details open style="width: fit-content; max-height: 600px; overflow: auto">
<summary>Response example:</summary>

```json
[
    {
        "id": 4,
        "name": "Halley",
        "type": "comet",
        "mass": 220000000000000,
        "radius": 11,
        "orbital_distance": 17.8,
        "orbital_period": 75.3,
        "discovery_date": "1758-12-25",
        "discovery_method": "telescope",
        "composition": "ice, dust, rock",
        "description": "Halley's Comet is one of the most famous short-period comets, visible from Earth every 76 years. Its visits have been documented for millennia, inspiring both science and mythology."
    }
]
```
</details>


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
