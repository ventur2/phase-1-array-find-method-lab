// function superbowlWin(element,index,array){
// const find = [
//     {year:}
// ]
// }

function superbowlWin(array){
const found = array.find(element => (element.result === 'W')) 
if (found === undefined){
    return undefined
}    
else if (found.result === 'W'){
return found.year
}
}