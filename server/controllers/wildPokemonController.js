const axios = require('axios')

modular.exports  = {
    getThreeRandomPokemon: (req, res) => {
        const wildPokemonArray = []
        const rand1 = Math.ceil(Math.random() * 151)
        const rand2 = Math.ceil(Math.random() * 151)
        const rand3 = Math.ceil(Math.random() * 151)
        
        const baseUrl = "https://pokeapi.co/api/v2/pokemon/" //give the url we can tack a random number onto

        // res.send({rand1, rand2, rand3, baseURL})
        axios.get(baseUrl + rand1).then((response1) => {
            wildPokemonArray.push(response1.data)

            axios.get(baseUrl + rand2).then((response2) => {
                wildPokemonArray.push(response2.data)

                axios.get(baseUrl + rand3).then((response3) => {
                    wildPokemonArray.push(response3.data)

                    res.status(200).send(wildPokemonArray)
                })
            })
        })
    },
}