let myFirstName = 'Alex'
let myLastName = 'Dmitruk'


function correct(string)
{
    for(let i = 0 ; i < string.lenght ; i++){
        if(string[i] === '0'){
            string[i] = 'O'
        }
        if(string[i] === '5'){
            string[i] = 'S'
        }
        if(string[i] === '1'){
            string[i] = 'I'
        }
    }
    return string
}