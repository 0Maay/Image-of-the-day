const contenedor = document.getElementById('contenedor')

const url = "https://api.nasa.gov/planetary/apod?api_key=updxpOG3tZbjbJvro09vdZiFnZSHnnifKMbrrtD1"

const get = async() => {
    try{
        const response = await fetch(url)
        const data = await response.json() 
        const result = mostrarInformacion(data)
        contenedor.innerHTML = result    

    }catch(error){
        console.log(error.message)
    }
}

const mostrarInformacion = ({date, explanation, hdurl, title}) => {
    return `
    <section>
        <h2>${date}</h2>
        <h4>${title}</h4>
        <img  src="${hdurl}" alt="${title}">
        <section class="descripcion">
            <p class="card_subtitle">${explanation}</p>
        </section>
    </section>
    `
}

// ejecuta la funcion en cuanto carga el archivo
get()