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
  document.querySelector('.output').innerHTML = `<p>${data.data[0].name}</p>`
})