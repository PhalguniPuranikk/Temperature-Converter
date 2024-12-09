const celsiusfield=document.querySelector("#celsius");
const degree=document.querySelector("#degree");
const convertBtn=document.querySelector("#convert-bt");
const tempType=document.querySelector("#temp-type");

window.addEventListener("load",() =>{
    degree.value="";
    celsiusfield.innerHTML="";
})

convertBtn.addEventListener("click",(e) =>{
    e.preventDefault();
    convertToCelsius();
})

function convertToCelsius() {
    let inputValue=degree.value;

    if(tempType.value==="farenheit"){
        const farenheitToCelsius=(inputValue -32)*(5/9);
        celsiusfield.innerHTML='${(farenheitToCelsius.toFixed(3)} &deg; c';
    }
    else if(tempType.value==="kelvin"){
        const kelvinToCelcius=inputValue -273.15;
        celsiusfield.innerHTML='${(kelvinToCelsius.toFixed(3)} &deg; c';
    }
}