const n1=10;
const n2=5;

function Soma(){
    return n1+n2;
}

console.log(Soma());

function Soma2(n3=0,n4=0){
    return n3+n4;
}

console.log(Soma2(10,34));

const f=function(v1,v2){
    return v1-v2;
}

console.log(f(25,32));

let mulheres=["Alzira","Bete","Cecília"];

console.log(mulheres);

mulheres.map((el)=>{
    console.log(el)
})

const f1= new Function("v3","v4","Return v3*v4");
console.log(f1(1212+32));