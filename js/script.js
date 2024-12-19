const list = document.getElementById('lista')
const add = document.getElementById('agregar')

add.addEventListener('click', () => {
    const element = prompt('Escribe un elemento')
    if (element.trim() === '') {
        alert('Escribe algún elemento')
    } else {
        const newElement = document.createElement('li')
        newElement.textContent = element
        list.appendChild(newElement)
    }
})