
export const returnRandomElements = (array) =>{
    let random = Math.floor(Math.random() * array.length);
    return array[random];
}

