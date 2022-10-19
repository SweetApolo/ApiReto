const nombrePokemon = document.querySelector('[pokemon-nombre]');
const imagenPokemon = document.querySelector('[pokemon-imagen]');
const numeroPokemon = document.querySelector('[pokemon-numero]');
const tipoPokemon = document.querySelector('[pokemon-tipo]');
const statsPokemon = document.querySelector('[pokemon-stats]');



const buscarPokemon = event => {
    event.preventDefault();
    const { value } = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then(data => data.json())
        .then(response => dataPokemones(response))
        .catch(err => renderNotFound())
}

const dataPokemones = data => {
    const sprite = data.sprites.front_default;
    const { types, stats } = data;

    nombrePokemon.textContent = data.name;
    imagenPokemon.setAttribute('src', sprite);
    numeroPokemon.textContent = `Nº ${data.id}`;
    
    tipoPokemones(types);
    statsPokemones(stats);
}



const tipoPokemones = types => {
    tipoPokemon.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.textContent = type.type.name;
        tipoPokemon.appendChild(typeTextElement);
    });
}

const statsPokemones = stats => {
    statsPokemon.innerHTML = '';
    stats.forEach(stat => {
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        const statElementAmount = document.createElement("div");
        statElementName.textContent = stat.stat.name;
        statElementAmount.textContent = stat.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        statsPokemon.appendChild(statElement);
    });
}

const renderNotFound = () => {
    nombrePokemon.textContent = 'No encontrado';
    imagenPokemon.setAttribute('src', 'pokeball-transparent-png-2.png');
    imagenPokemon.style.background = '#fff';
    tipoPokemon.innerHTML = '';
    statsPokemon.innerHTML = '';
    numeroPokemon.textContent = '';
}



