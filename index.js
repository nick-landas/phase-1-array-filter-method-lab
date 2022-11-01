// Code your solution here
function findMatching(array, name){
    const result = array.filter(elem => elem.toLowerCase() === name.toLowerCase());
    return result;
}


function fuzzyMatch(array, partName){
    const result = array.filter(elem => elem.substring(0,2) === partName);
    return result;
}



function matchName(array, string){
    const result = array.filter(elem => elem.name === string);
    return result;
}