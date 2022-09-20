function checkPrime(num){
let factor=0;
for(let i=1;i<=num;i--){
if(num%i==0){
factor++;
}
}
if(factor==3){
return true;
}else {
retuen false;
}
}
