**Cosmic Objects API Specification**

---

## 1. Random Object of Any Type
**Endpoint:**
```
GET /api/cosmic-objects/random
```
**Description:** Returns a single random cosmic object from any category.

**Example Response:**
```json
{
  "id": 12,
  "category": "planet",
  "name": "Kepler-22b",
  "type": "Super-Earth",
  "star_system": "Kepler-22",
  "galaxy": "Milky Way",
  "mass": "2.4 M⊕",
  "radius": "2.38 R⊕",
  "moons": {},
  "description": "Kepler-22b is a confirmed exoplanet orbiting within the habitable zone of its host star. It is slightly larger than Earth and may have a gaseous or watery composition. Located approximately 600 light-years away, it was discovered using the transit method by NASA's Kepler mission."
}
```

---

## 2. Random Object from a Specific Category
**Endpoint:**
```
GET /api/cosmic-objects/random/{category}
```
**Example:**
```
GET /api/cosmic-objects/random/stars
```

**Example Response:**
```json
{
  "id": 34,
  "category": "star",
  "name": "Betelgeuse",
  "type": "Red Supergiant",
  "mass": "18 M☉",
  "radius": "887 R☉",
  "distance_from_earth": "642.5 light years",
  "description": "Betelgeuse is a red supergiant star in the Orion constellation. It is nearing the end of its life and is expected to explode as a supernova within the next 100,000 years. Its reddish hue and variable brightness have made it an object of fascination for centuries."
}
```

---

## 3. Get a Specific Object by ID
**Endpoint:**
```
GET /api/cosmic-objects/{category}/{id}
```
**Example:**
```
GET /api/cosmic-objects/planets/15
```

**Example Response:**
```json
{
  "id": 15,
  "category": "planet",
  "name": "Mars",
  "type": "Terrestrial",
  "star_system": "Solar System",
  "galaxy": "Milky Way",
  "mass": "6.417 × 10^23 kg",
  "radius": "3,389.5 km",
  "moons": {"Phobos": "Phobos", "Deimos": "Deimos"},
  "description": "Mars is the fourth planet from the Sun, known for its red surface caused by iron oxide. It has two small moons, Phobos and Deimos, and has been a target for numerous robotic missions exploring its geology and potential habitability."
}
```

---

## 4. Filter Endpoints by Type or Other Properties

**Asteroids / Comets**
```
GET /api/cosmic-objects/asteroids-comets/filter?type=asteroid
```

**Black Holes**
```
GET /api/cosmic-objects/blackholes/filter?type=supermassive
```

**Constellations**
```
GET /api/cosmic-objects/constellations/filter?type=northern
```

**Galaxies**
```
GET /api/cosmic-objects/galaxies/filter?type=spiral
```

**Planets (by type and galaxy)**
```
GET /api/cosmic-objects/planets/filter?type=Gas+Giant&galaxy=Milky+Way
```

**Stars**
```
GET /api/cosmic-objects/stars/filter?type=Red+Giant
```

**Example Response (filtered planets):**
```json
[
  {
    "id": 102,
    "category": "planet",
    "name": "Jupiter",
    "type": "Gas Giant",
    "star_system": "Solar System",
    "galaxy": "Milky Way",
    "mass": "1.898 × 10^27 kg",
    "radius": "69,911 km",
    "moons": {"Io": "Io", "Europa": "Europa", "Ganymede": "Ganymede", "Callisto": "Callisto"},
    "description": "Jupiter is the largest planet in the Solar System, a gas giant with a strong magnetic field and dozens of moons. Its Great Red Spot is a persistent storm larger than Earth."
  }
]
```

---

## 5. Get All Objects of a Single Category (Pagination)
```
GET /api/cosmic-objects/{category}?page=1&limit=20
```

**Example Response:**
```json
{
  "page": 1,
  "limit": 20,
  "total": 150,
  "pages": 8,
  "data": [
    { "id": 1, "name": "Mercury", "type": "Terrestrial", "category": "planet" },
    { "id": 2, "name": "Venus", "type": "Terrestrial", "category": "planet" },
    ...
  ]
}
```

---

## 6. Search by Name
```
GET /api/cosmic-objects/{category}?search=Sirius
```

**Example Response:**
```json
[
  {
    "id": 1,
    "category": "star",
    "name": "Sirius",
    "type": "A1V Main-Sequence Star",
    "mass": "2.063 M☉",
    "radius": "1.711 R☉",
    "distance_from_earth": "8.6 light years",
    "description": "Sirius is the brightest star in the night sky..."
  }
]
```

---

### Notes on Implementation
1. Always include `category` in the response.
2. Return `404` if object not found; `400` for invalid query params.
3. Include pagination metadata (`total`, `pages`, `page`, `limit`).
4. Support multiple filters for planets and stars.
5. Random endpoints should select objects uniformly.

---

