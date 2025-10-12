const linear = function search( arr , target){
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] == target) return console.log("found element")
    }

    return console.log("not found element")
}


const binary = function search( arr , target){
    let left = 0 ;
    let right = arr.length - 1 ;
    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        if(arr[mid] == target) return console.log("found element")
        else if(arr[mid] < target) left = mid + 1
        else right = mid - 1
}
    return console.log("not found element")
 }


//  module.exports = { linear : linear , binary  : binary};

module.exports = {linear , binary}