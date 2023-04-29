import axios from "axios";

export const fetchWeather=async(query)=>{
      const URL='https://api.openweathermap.org/data/2.5/weather';
      const  API_KEY='c70f023fe2c7999146c6623f196f38f2'
    const {data}=await axios.get(URL,{
        params:{
            q:query,
            units:'metric',
            APPID:API_KEY
        }
    })
    return data;
}
