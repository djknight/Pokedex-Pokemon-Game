import React, { Component } from "react";
import Pokedex from "./Pokedex";

class Pokegame extends Component {
  static defaultProps = {
    Pokemon: [
      { id: 4, name: "Charmander", type: "Fire", base_exp: 62 },
      { id: 7, name: "Squirtle", type: "Water", base_exp: 63 },
      { id: 11, name: "Metapod", type: "Bug", base_exp: 72 },
      { id: 12, name: "Butterfree", type: "Flying", base_exp: 178 },
      { id: 25, name: "Pikachu", type: "Electric", base_exp: 112 },
      { id: 39, name: "Jigglypuff", type: "Normal", base_exp: 95 },
      { id: 94, name: "Gengar", type: "Poison", base_exp: 225 },
      { id: 133, name: "Eevee", type: "Normal", base_exp: 65 },
    ],
  };
  ///randomizing the pokemon .
  render() {
    let hand1 = [];
    let hand2 = [...this.props.Pokemon];
    while (hand1.length < hand2.length) {
      let randIdx = Math.floor(Math.random() * hand2.length);
      let randPokemon = hand2.splice(randIdx, 1)[0];
      hand1.push(randPokemon);
    }
    //calculating the Exp
    let exp1 = hand1.reduce((exp, Pokemon) => exp + Pokemon.base_exp, 0);
    let exp2 = hand2.reduce((exp, Pokemon) => exp + Pokemon.base_exp, 0);

    return (
      <div>
        <Pokedex Pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
        <Pokedex Pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
      </div>
    );
  }
}
export default Pokegame;
