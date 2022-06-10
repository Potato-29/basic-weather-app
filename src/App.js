import { useAnimation, motion, animate } from 'framer-motion';
import Wave from 'react-wavify';
import {useEffect, useState } from 'react';
import './App.css';

const api = {
  key: "3a32ea8aa9da87d2dd47fd7b11aa4eeb",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({})
  const [iconURL, seticonURL] = useState('')
  // const [divHeight, setdivHeight] = useState('')

  
  

  {var weatherInfo = document.getElementById('weatherMain')}


  const ctrls = useAnimation()

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(res => {
        setWeather(res)
        setQuery("")
        seticonURL(`https://openweathermap.org/img/w/${res.weather[0].icon}.png`)
        
        console.log(res)
      })
    }
  }




  

  // const runApi = () => {
  //   const temp = fetch(`${api.base}weather?lat=35&lon=139&appid=${api.key}`).then(res => res.json())
  //   console.log(temp)
  // }

  return (
    <div className="App">
      <motion.div
        
        initial={{height: "30vh"}}
        animate={{height: "100vh"}} 
        transition={{duration: 0.8, type: "spring"}} 
        
        className="wave-container">
        <Wave fill="#66c2e3"
          paused={false}
          opacity="0.9"
          options={{
            height: 20,
            amplitude: 40,
            speed: 0.2,
            points: 3,
          }}>
          </Wave>
        </motion.div>
        <div className="searchbox">
            <motion.input
             initial={{top: -70}}
             animate={{top: 0}}
             transition={{duration: 0.3}}
             
             type="text" placeholder='Enter a location'
            onChange={e => setQuery(e.target.value)}
            value={query} 
            onKeyPress={search} 
            // onSubmit={heightUp}
            className='search'

            
            />
        </div>
        {(typeof weather.main !== "undefined") ? (
          
          <div className="weather" id='weatherMain'>
            <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            className="location">
              <h1 id='weatherMain'>{weather.name}, {weather.sys.country}</h1>
            </motion.div>
            <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{type: 'spring', duration: 0.8}}
            className="current-temp">
              <p className='temp'>{weather.main.temp} °C</p>
              <p className='temp-max-min'>Max: {weather.main.temp_max} °C <br /> Min: {weather.main.temp_min} °C</p>
            </motion.div>
            <div className="weather-type">
              {/* {seticonURL(`http://openweathermap/img/w/${weather.weather[0].icon}`)} */}
              
              <img className='icon' src={iconURL} alt="" /><p className=''>{weather.weather[0].main}</p>
              
            </div>
          </div>
        ) : ('')}
    </div>
  );
}

export default App;
