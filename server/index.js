const express = require('express')
const app = express()
const wildCtrl = require('./controllers/wildPokemonController')
const caughtCtrl = require('./controllers/caughtPokemonController.js')

app.use(express.json())

//Wild pokemon endpoints
app.get('/api/pokemon', caughtCtrl.getCaughtPokemon)
app.post('/api/pokemon', caughtCtrl.catchCaughtPokemon)
app.put('/api/pokemon/:pokemon_id', caughtCtrl.editCaughtPokemon)
app.delete('/api/pokemon/:pokemon_id', caughtCtrl.deleteCaughtPokemon)


app.listen(3333, () => console.log(`Server is listening on port ${3333}`))