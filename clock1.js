// Making a clock

function time(){
let time= new Date;
let hours=time.getHours();
if(hours>12)
{
    hours-=12;
}
let min=time.getMinutes();
let sec=time.getSeconds(); 
console.log(hours,':',min,':',sec);

}

function clearscreen(){
    console.clear();
}
setInterval(clearscreen,1000);
setInterval(time,1000);