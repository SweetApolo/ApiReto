const pokeCard = document.querySelector('[data-card]');
const pokeImgContainer = document.querySelector('[data-img-container]');
const pokeImg = document.querySelector('[data-img]');
const pokeName = document.querySelector('[data-name]');
const pokeId = document.querySelector('[data-id]');
const pokeTypes = document.querySelector('[data-types]');

const buscaPoke = event => {
    event.preventDefault();
    const { value } = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then(data => data.json())
        .then(response => dataPoke(response))
}

const dataPoke = data => {
    const sprite =  data.sprites.front_default;
    const {types} = data;
    console.log(data)

    pokeName.textContent = data.name;
    pokeImg.setAttribute('src', sprite);
    pokeId.textContent = `Nº ${data.id}`;
    typesPoke(types);
}

const typesPoke = types => {
    pokeTypes.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.textContent = type.type.name;
        pokeTypes.appendChild(typeTextElement);
    });
}