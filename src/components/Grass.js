import React, {Component} from 'react'

class Grass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            grassClicked: false,
        }
    }

    checkGrass() {
        const {data} = this.props
        this.props.catchPokemon(data.name, data.sprites.front_default)
    }

    render() {
        return (
        <div>
            <img scr={this.props.data.sprites.front_default} 
            alt={this.props.data.name}
            onClick={()=> this.checkGrass()}/>
            <p>{this.props.data.name}</p>
            </div>
        )
    }
}

export default Grass