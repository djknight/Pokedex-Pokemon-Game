import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  static defaultProps = {
    // dont need
    // Pokemon: [
    //   { id: 4, name: "Charmander", type: "Fire", base_exp: 62 },
    //   { id: 7, name: "Squirtle", type: "Water", base_exp: 63 },
    //   { id: 11, name: "Metapod", type: "Bug", base_exp: 72 },
    //   { id: 12, name: "Butterfree", type: "Flying", base_exp: 178 },
    //   { id: 25, name: "Pikachu", type: "Electric", base_exp: 112 },
    //   { id: 39, name: "Jigglypuff", type: "Normal", base_exp: 95 },
    //   { id: 94, name: "Gengar", type: "Poison", base_exp: 225 },
    //   { id: 133, name: "Eevee", type: "Normal", base_exp: 65 },
    // ],
  };
  render() {
    return (
      <div className="Pokedex">
        <h1>Pokedex!</h1>
        <p>{this.props.isWinner ? "Winner!" : "You Lost!"}</p>
        <p>Total Experience: {this.props.exp}</p>
        <div className="Pokedex-cards">
          {this.props.Pokemon.map((p) => (
            <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_exp} />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
