const messages =[
    "Oscar",
    "Ana",
    "Jhon",
    "Maria",
    "Sam",
    "Diego",
    "Santiago",
    "Nicolas",
    "Fanny",
    "Samanta",
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message);
}

module.exports = { randomMsg }