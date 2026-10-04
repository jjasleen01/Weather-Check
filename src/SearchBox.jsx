import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./search.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let[city, setCity] = useState("");
    let[error, setError] = useState(false);

    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;


    let getInfo = async ()=>{
        try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);

        let results = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMax: jsonResponse.main.temp_max,
        tempMin: jsonResponse.main.temp_min,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        description: jsonResponse.weather[0].description,
    }
    return results;
        }catch{
            throw error;
        }
    }

    let cityName = (event)=>{
        setCity(event.target.value);
    }

    let handleSubmit = async (event)=>{
        try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getInfo();
        updateInfo(newInfo);
        setError(false);
        }catch{
            setError(true);
        }
    }

    return (
        <>
         <h1 style = {{textAlign: "center"}}>Weather app using React</h1>
        <div className="search">
            <h2>Search Weather...</h2>
            <form onSubmit = {handleSubmit}>
            <TextField value = {city} onChange={cityName} id="city" label="Search city..." variant="outlined" required/>
            <br></br><br></br>
              <Button type ="submit" variant="contained">Search</Button>
              {error && <h4 style={{color: "red"}}>Place not found!</h4>}
            </form>
        </div>
        </>
    )
}