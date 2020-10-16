const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}


//valuaes
const lat = document.querySelector(' span[data-lat]').dataset.lat
const lng = document.querySelector(' span[data-lng]').dataset.lng

/* Criando mapa*/

const map = L.map('mapid', options).setView([lat, lng], 15);

/* Criando e adicionando capada de mapa*/
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map);

//Criando icone
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//Criando popup 



L.marker([lat, lng], { icon })
    .addTo(map)


function selectImage(event) {
    const button = event.currentTarget


    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    imageContainer.src = image.src


    button.classList.add("active")


}