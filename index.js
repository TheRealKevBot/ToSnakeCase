// Complete the function/method so that it takes CamelCase string and returns the string in snake_case notation. 
// Lowercase characters can be numbers. If method gets number, it should return string. 

function toUnderscore(string) {
    let answer = ''
    let part = ''
    if (isNaN(string)) {
        for (let i = 0; i < string.length; i++) {
            part.length === 0 ? part = part.concat(string[i])
            : string[i] === string[i].toLowerCase() ? part = part.concat(string[i])
            : string[i] === string[i].toUpperCase() ? (answer = answer.concat(part + '_'), part = string[i]) 
            : null
        }
    } else { 
        answer = string
    }
    answer = (answer + part).toLocaleLowerCase()
    return answer
} 


console.log(toUnderscore('TestController'));
console.log(toUnderscore('MoviesAndBooks'));
console.log(toUnderscore('App7Test'));
console.log(toUnderscore(1));