import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        description: "clear sky",
        feelsLike: 37.78,
        humidity: 36,
        temp: 35.97,
        tempMax: 35.97,
        tempMin: 35.97
    });

    let updateInfo = (result)=>{
        setWeatherInfo(result);
    }
    
    return (
    <>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/> 
    </>
  )
}