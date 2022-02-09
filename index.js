const express = require('express');
const cors = require('cors')
const artwork = require('./artwork')

const app = express();
const port = 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/all', (req, res) => {
    res.json(artwork.paintings.concat(artwork.sketches).concat(artwork.graphics));
})

app.get('/random', (req, res) => {
    const all = artwork.paintings.concat(artwork.sketches).concat(artwork.graphics);
    let idx = Math.floor(Math.random() * all.length);
    res.json([all[idx]]);
})

app.get('/sketches', (req, res) => {
    res.json(artwork.sketches);
})

app.get('/paintings', (req, res) => {
    res.json(artwork.paintings);
})

app.get('/graphics', (req, res) => {
    res.json(artwork.graphics);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
