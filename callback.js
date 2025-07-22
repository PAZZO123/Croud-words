function DisplaySum(n){
    return `Sum is: ${n}`
}
function calculateSum(n1,n2,calBack){
    let sum=n1+n2
    return calBack(sum)
}
console.log(calculateSum(3,7,DisplaySum))