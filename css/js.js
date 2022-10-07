var num = [1,2,3,4,5,6,7,8,9,10]
const sum = num.reduce((prev,index)=>prev+index,0)
const fill = num.filter(maior=>maior>=5)
const map = num.map(a=>a*a)
console.log(map)