function crearColaborador({titulo,imagen}){
    return `
    <div class="Cargo">
        <img src="${imagen}" alt="" width="250px" height="250px">
        <h2>${titulo}</h2>
    </div>
    `;
}

const datos=[
    {titulo: "Maestro",imagen:"imagenes/Presidente.PNG"},
    {titulo: "Oficial",imagen:"imagenes/cargo2.jpg"},
    {titulo: "Ayudante",imagen:"imagenes/cargo3.PNG"},
   
    
];



const contenedor2=document.querySelector('.Cargos')
console.log(contenedor2)

for (servicio of datos){
    const servicioHtml = crearColaborador(servicio);
    contenedor2.insertAdjacentHTML('beforeend', servicioHtml);
}
