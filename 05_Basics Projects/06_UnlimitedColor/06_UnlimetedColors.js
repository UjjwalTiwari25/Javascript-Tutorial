//Generate random color
const randomColor =function(){
    const hexColors = "0123456789ABCDEF"
    let color ='#'
    for (let i = 0; i < 6; i++) {
        color+=hexColors[Math.floor(Math.random()*16)]
    }
    return color
};

// console.log(Math.floor(Math.random()*16));

let intervalId;
/**
 * This function starts changing the background color of the page every second.
 * It first checks if an interval has already been set, and if not, it sets one.
 * The interval calls the changeBgColor function every second.
 * The changeBgColor function changes the background color of the page to a
 * randomly generated color.
 */
const startChangingColor =function(){
     if(!intervalId){
        intervalId=setInterval(changeBgColor,1000);
     }
   function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
   }
}


const stopChangingColor =function(){
    clearInterval(intervalId);
    intervalId=null;//...we are overridding intervalId 
    // ...but we want to write cleaner code..we are flushout intervalId.. jaisa mera uska kaam hogya..hm de-reference kr de value ko
}

document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);