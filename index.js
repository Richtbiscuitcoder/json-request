fetch('https://dev.io-academy.uk/resources/bond.php')
.then((response) => {
    return response.json()
}) .then((data) => {
    console.log(data)
})

fetch('https://dev.io-academy.uk/resources/bond.php')
.then((response) => {
    return response.json()
}) .then((data) => {
    data.data.forEach((film) => {
        document.querySelector('.output').innerHTML += `<li>${film.name}</li>`
    })
})
