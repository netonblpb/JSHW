let isName = prompt('Как Вас зовут?', 'Имя')

function printName() {
    let message = `Привет,  ${isName}!`
    alert(message)
}

printName()