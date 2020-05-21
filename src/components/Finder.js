import React, {Component} from 'react'
import Grass from './Grass'
import axios from 'axios'
import { findByLabelText } from '@testing-library/react'
class Finder extends Component {
    constructor() {
        super()
        this.state = {
            wildPokemon: [],
        }
    }

    componentDidMount() {
        axios.get('/api/wild-pokemon').then(res => {
            this.setState({
                wildPokemon: res.data, //is what is sent
            })
        })
    }

    render() {
        const pokemonMap = this.state.wildPokemon.map((elementpokemon) => (
        <Grass 
        key={elementpokemon.id} 
        catchPokemon={this.props.catchPokemon} 
        data={elementpokemon}
        refreshFn={this.componentDidMount}
        />))
        return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            {pokemonMap}
            <Grass catchPokemon={this.props.catchPokemon}/>
        </div>
        )
    }
}

export default Finder