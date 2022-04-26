const colors = ['#006E7F', '#F8CB2E', '#EE5007', '#E4AEC5', '#AC7D88', '#AB46D2',
'#4B7BE5', '#B4FF9F', '#83BD75', '#A1E3D8', '#FF6363', '#417D7A', '#001E6C', '#D7A86E', 
'#E78EA9', '#CC704B', '#525E75', '#F900BF', '#43919B', '#712B75', '#9C0F48', '#B85252', '#4D4C7D',
'#733C3C', '#61A4BC', '#5B7DB1', '#74959A', '#11324D', '#346751', '#810000', '#DE356A']


const colorButton = document.querySelector('button')
const hexCode = document.querySelector('p')

colorButton.addEventListener('click', function() {
    let randomColor = Math.floor(Math.random() * colors.length) + 1
    document.body.style.background = colors[randomColor]
    hexCode.textContent = colors[randomColor]
})

document.addEventListener('keyup', function (event) {
    if (event.key === 'ArrowUp') {
            let randomColor = Math.floor(Math.random() * colors.length) + 1
            document.body.style.background = colors[randomColor]
            hexCode.textContent = colors[randomColor]
        }

    })