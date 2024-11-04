let a = 10;
let b = 5;
function multiple(){
    let c;
    if(a>b){
        c = a * b;
    }
    console.log("global scope",c);
}
multiple();

let i = -2;
switch(i){
case 1:
    console.log(1);
    break;
case 2:
    console.log("two");
    break;
default:
    console.log("Invalid input");
    break;
}   


a = [1,2,3,4,5];
i = 0;
s = 0;
while(i<a.length)
{
    s = s + a[i];
    console.log(i,s);
i++   
}

r = [1,2,3,4,5];
a = 0;
j = 0;
do
{
    s = s + a[i];
    console.log(i,s);
i++    
}
while(i<r.length)
    console.log(i,s);