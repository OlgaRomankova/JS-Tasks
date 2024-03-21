function extractNameFromTemplate(value) {
    let c = value.replace("Hello,", '')
    let d = c.replace("!", '')
    return d
    }

console.log(extractNameFromTemplate("Hello, John Doe!"))
console.log(extractNameFromTemplate('Hello, Chuck Norris!'))    //Yuuhu!

