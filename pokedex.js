const PokeMoves = document.getElementById("lista-mov");

const typeColors = {
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F',
};

const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("../img/pkeball.png")
            document.getElementById("pokeNombre").innerHTML = "SIN DATO";
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);

            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);

            let pokeName = data.name;
            document.getElementById("pokeNombre").innerHTML = pokeName;

            let pokeNumber = data.id;
            document.getElementById("pokeNumero").innerHTML = ("#: " + pokeNumber);

            let pokeTipo = data.types[0].type.name;
            document.getElementById("pokeTipo").innerHTML = ("TIPO: " + pokeTipo);

            let pokePeso = data.weight;
            document.getElementById("pokePeso").innerHTML = ("PESO: " + pokePeso/10 + " KG");

            let pokeAltura = data.height;
            document.getElementById("pokeAltura").innerHTML = ("ALT: " + pokeAltura/10 + " M");

            let pokeHP = data.stats[0].base_stat;
            document.getElementById("pokeHP").innerHTML = pokeHP;

            let pokeATK = data.stats[1].base_stat;
            document.getElementById("pokeATK").innerHTML = pokeATK;
            
            let pokeDEF = data.stats[2].base_stat;
            document.getElementById("pokeDEF").innerHTML = pokeDEF;

            let pokeSPATK = data.stats[3].base_stat;
            document.getElementById("pokeSPATK").innerHTML = pokeSPATK;

            let pokeSPDEF = data.stats[4].base_stat;
            document.getElementById("pokeSPDEF").innerHTML = pokeSPDEF;

            let pokeSPD = data.stats[5].base_stat;
            document.getElementById("pokeSPD").innerHTML = pokeSPD;

            printPokeMoves(data);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const printPokeMoves = (data) => {
    let moves = data.moves;
    PokeMoves.innerHTML = "";

    for (let i = 0; i < moves.length; i++) {
        const move = document.createElement("li");
        PokeMoves.appendChild(move);

        move.innerText = moves[i].move.name;
    }
}