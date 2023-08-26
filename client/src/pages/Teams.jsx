import React, { useState } from 'react';
import { Dropdown, ButtonGroup } from 'react-bootstrap';

const Teams = () => {
  // Arrays of Pokémon names
  const pokemonNames1 = ["Pikachu", "Charizard", "Bulbasaur", "Squirtle", "Jigglypuff"];
  const pokemonNames2 = ["Mewtwo", "Gengar", "Dragonite", "Vaporeon", "Snorlax"];
  const pokemonNames3 = ["Machamp", "Lapras", "Arcanine", "Mew", "Alakazam"];
  const pokemonNames4 = ["Gyarados", "Golem", "Aerodactyl", "Kabutops", "Omastar"];

  // States to store the selected Pokémon for each menu
  const [selectedPokemon1, setSelectedPokemon1] = useState('');
  const [selectedPokemon2, setSelectedPokemon2] = useState('');
  const [selectedPokemon3, setSelectedPokemon3] = useState('');
  const [selectedPokemon4, setSelectedPokemon4] = useState('');

  // Function to handle dropdown selection for each menu
  const handleDropdownSelect = (name, menuNumber) => {
    switch (menuNumber) {
      case 1:
        setSelectedPokemon1(name);
        break;
      case 2:
        setSelectedPokemon2(name);
        break;
      case 3:
        setSelectedPokemon3(name);
        break;
      case 4:
        setSelectedPokemon4(name);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            {/* Existing card content */}
          </div>
        </div>

        <div className="col-md-6">
          <div className="container mt-4">
            <Dropdown as={ButtonGroup} className="mb-3">
              <Dropdown.Toggle variant="primary" id="dropdown-basic1">
                {selectedPokemon1 || 'Select a Pokémon 1'}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {pokemonNames1.map((name, index) => (
                  <Dropdown.Item
                    key={index}
                    onClick={() => handleDropdownSelect(name, 1)}
                  >
                    {name}
                  </Dropdown.Item>
                ))}
                <Dropdown.Divider /> {/* Divider */}
                <Dropdown.Item disabled>Empty Section</Dropdown.Item> {/* Empty Section */}
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown as={ButtonGroup} className="mb-3">
              <Dropdown.Toggle variant="primary" id="dropdown-basic2">
                {selectedPokemon2 || 'Select a Pokémon 2'}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {pokemonNames2.map((name, index) => (
                  <Dropdown.Item
                    key={index}
                    onClick={() => handleDropdownSelect(name, 2)}
                  >
                    {name}
                  </Dropdown.Item>
                ))}
                <Dropdown.Divider /> {/* Divider */}
                <Dropdown.Item disabled>Empty Section</Dropdown.Item> {/* Empty Section */}
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown as={ButtonGroup} className="mb-3">
              <Dropdown.Toggle variant="primary" id="dropdown-basic3">
                {selectedPokemon3 || 'Select a Pokémon 3'}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {pokemonNames3.map((name, index) => (
                  <Dropdown.Item
                    key={index}
                    onClick={() => handleDropdownSelect(name, 3)}
                  >
                    {name}
                  </Dropdown.Item>
                ))}
                <Dropdown.Divider /> {/* Divider */}
                <Dropdown.Item disabled>Empty Section</Dropdown.Item> {/* Empty Section */}
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown as={ButtonGroup} className="mb-3">
              <Dropdown.Toggle variant="primary" id="dropdown-basic4">
                {selectedPokemon4 || 'Select a Pokémon 4'}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {pokemonNames4.map((name, index) => (
                  <Dropdown.Item
                    key={index}
                    onClick={() => handleDropdownSelect(name, 4)}
                  >
                    {name}
                  </Dropdown.Item>
                ))}
                <Dropdown.Divider /> {/* Divider */}
                <Dropdown.Item disabled>Empty Section</Dropdown.Item> {/* Empty Section */}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
