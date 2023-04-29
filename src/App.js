import { useState } from 'react';
import './App.css';
import { fetchWeather } from './Weather';


function App() {
 const [query , setQuery]=useState('');
 const [weather, setWeather]=useState({});

  const search=async(e)=>{
    
     const data=await fetchWeather(query)
     setWeather(data)
    
  }

  return (
    <div className="App">
      <div className='maindiv'>
        
        <input type='text' placeholder='Search...' value={query} 
        onChange={(e)=>setQuery(e.target.value)}
        />
        <button type='submit' onClick={search}>search</button>
      
      </div>
      {
        weather.main && (
          <div className='infodiv'>
            <h2>
              <span>{weather.name}</span>
              <sub>{weather.sys.country}</sub>
            </h2>
            <div>
              {Math.round(weather.main.temp)}
              <sub>&deg;C</sub>
            </div>
            <div>
              <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}alt={weather.weather[0].description}/>

              <p>{weather.weather[0].description}</p>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default App;
