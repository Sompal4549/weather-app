import React, { useState } from "react";
function Weather(){
    const [weather, setWeather]= useState([]);
    const [form, setForm] = useState({
        city:"",
        country:"",
    })
    const APIKEY = "Enter Your APIKEY here";
    async function weatherData(e){
        e.preventDefault();
        if(form.city==""){
            alert("Add values");
        } else{
            const data = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=`
            )
        }
    }
    return(
        <>

        </>
    )
}
export default Weather;
