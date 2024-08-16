import { useEffect, useState } from "react";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "5f4ebe26a0395872ea1bdd8d64085e51";

type Return = {
    weatherData: any
}

const useApi = () : Return  => {
    const[weatherData, setWeatherData] = useState<Return>();

    useEffect(()=>{
        const getWeatherByLocation = async (location : string) : Promise<any> => {
            try{
                const res = await fetch(`${BASE_URL}?q=${location}&appid=${API_KEY}&units=metric`) 
                if(!res.ok){
                    throw new Error("Error")
                } 
    
                const data = await res.json()
                setWeatherData(data)
                console.log(data)
                
            }
            catch(error){
                console.log(error)
            }

          }
          getWeatherByLocation("Kyiv")
    },[])

     

      return  {weatherData}
}

export default useApi;


