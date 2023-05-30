// import usuarios from './usuarios.json' assert { type: "json" };

// const promesa = new Promise((resolve, reject) => {
//     const usuario = usuarios;
//     setTimeout(()=>{
//         if(usuario){
//             resolve(console.log("Usuarios: ", usuarios));
//         } else {
//             reject("ERROR");
//         }
//     }, 4000);
// });

// promesa
// .then((respuesta) => console.log(respuesta))
// // .then((respuesta) => console.log("Usuarios: " + JSON.stringify(usuarios)))  así sería sin el console.log en el resolve
// .catch((error) => console.log(error));




/////// TAREA 2 ////////
// async function findeAllCharacters() {
//     const data = await fetch("https://rickandmortyapi.com/api/character");
//     const dataJson = await data.json();

//     const resultadosObtenidos = dataJson.results;

//     const resultadosFormateados = [];

//     resultadosObtenidos.forEach(personaje => {
//         let personajeReducido = {
//             nombre: personaje.name,
//             gender: personaje.gender,
//             planetaDeOrigen: personaje.origin.name,
//             urlPlaneta: personaje.origin.url,
//             origen: personaje.origin,
//         };
//         resultadosFormateados.push(personajeReducido);
//     });
//     console.log(resultadosFormateados);

//     return resultadosFormateados;
// }

// findeAllCharacters();



///////TAREA 3 ////////

// let characterName = `Rick`;

// async function buscarPersonajePorNombre() {
//     // let url = "https://rickandmortyapi.com/api/character" + characterName;

//     const data = await fetch(`https://rickandmortyapi.com/api/character/name=${characterName}`);

//     const dataJson = await data.json()

//     const resultadoObtenido = dataJson.results

//     //console.log(data);
//     return resultadoObtenido;
// }
    
// const personajeBuscado = await buscarPersonajePorNombre(characterName);

// console.log(characterName);

// async function buscarTododsLosEpisodios(){
//     const data = fetch (`https://rickandmortyapi.com/api/episode/`)
//     const dataJson = awai data.json();
//     const resultadosObtenidos = dataJson.results;

//     const resultadosFormateados = []

// }






//
//API POKEMON
//
async function buscarTodosLosPokemones() {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    const dataJson = await data.json;
    const resultadosObtenidos = dataJson.results;

    let resultadosFormateados = [];

    for (let index = 0; index < resultadosObtenidos.length; index++) {
        const pokemon = resultadosObtenidos[index];
        let url = pokemon.url;
        //console.log(url)  para comprobar

        const data = await fetch(url); //aqui esta la informacion en xml
        const dataJson = await data.json() //aquí ya esta en json
        //console.log(dataJson);  este ya es un pokemon
        

        const pokemonFormateado = {
            nombre: dataJson.name,
            tipo: dataJson.types.map((slot)=> slot.type.name), //con ".map" guarada los resultados, podemos consologuear y "forEach" solo ejecuta o recorre
            imagen: dataJson.sprites.other.dream_world.front_default
        };

        resultadosObtenidos.push(pokemonFormateado);
    }
    return resultadosFormateados;
}

buscarTodosLosPokemones();

//para instalar de nuevo el node-modules y el -lock usar el el comando "npm i".