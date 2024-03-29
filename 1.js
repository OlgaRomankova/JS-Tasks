

function unbracketTag(str) {
    
    
    return str.match(/[\w+]/g).join('')
}
    console.log(unbracketTag("<div>"))
    console.log(unbracketTag("<span>"))
    console.log(unbracketTag("<a>"))
