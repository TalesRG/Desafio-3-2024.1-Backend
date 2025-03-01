
function changeImage(id, url) {
  document.getElementById(id).src = url;
}

function changeText(id, text) {
  document.getElementById(id).innerText = text;
}
let currentPokemon = 1;

async function fetchPokemon(pokemonIdOrName) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIdOrName}`);
    const data = await response.json();

    changeText("name", data.name.toUpperCase() + " #" + data.id);

    if (data.sprites.front_default) {
      changeImage("img_sprite_front_default", data.sprites.front_default);
    } else {
      changeImage("img_sprite_front_default", "../assets/missingno.png");
    }

  } catch (error) {
    console.error(error);
  }
}

function previousPokemon() {
  if (currentPokemon > 1) {
    currentPokemon--;
  }
  fetchPokemon(currentPokemon);
}

function nextPokemon() {
  currentPokemon++;
  fetchPokemon(currentPokemon);
}

window.onload = () => {
  fetchPokemon(currentPokemon);
};
