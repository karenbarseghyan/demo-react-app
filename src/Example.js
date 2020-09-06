function sum(a,b){
    return a + b;
};

const multiply = (a,b) => {
    return a*b;
};

const arr = [1,2,5,25];
const newarr = arr.map((item) => item*10);
console.log(newarr);

export default sum;