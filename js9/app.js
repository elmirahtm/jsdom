// const saatclock=document.querySelector(".saatclock").innerHTML=saatclock
// const deqiqeminute=document.querySelector(".deqiqeminute").innerHTML=deqiqeminute
// const saniyesecond=document.querySelector(".saniyesecond").innerHTML=saniyesecond

const time=()=>{
    const date= new Date();
    const saatclock=date.getHours();
    const deqiqeminute=date.getMinutes();
    const saniyesecond=date.getSeconds();
document.querySelector(".saatclock").innerHTML=saatclock
document.querySelector(".deqiqeminute").innerHTML=deqiqeminute
document.querySelector(".saniyesecond").innerHTML=saniyesecond
}
setInterval( time,1000);
time();



// saatclock.innerHTML=saatclock
// deqiqeminute.innerHTML=deqiqeminute
// saniyesecond=innerHTML=saniyesecond