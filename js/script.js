const paragraph = document.getElementById ('pass-js');
console.log(paragraph);

let message = 'La tua password è '
console.log(message)

const userName = prompt ('Come ti chiami?')
console.log(userName)

const userLastName = prompt ('Come fai di cognome?')
console.log(userLastName)

const userPreferColor = prompt ('Qual è il tuo colore prefrito?')
console.log(userPreferColor)

const number = 23;
console.log(number);

const password = message + userName + userLastName + userPreferColor + number
console.log(password)

paragraph.innerText = password
console.log(password)