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
  const [gujWeather, setGujWeather] = useState({})
  const [delhiWeather, setDelhiWeather] = useState({})
  const [bangaloreWeather, setBangaloreWeather] = useState({})
  const [hyderabadWeather, setHyderabadWeather] = useState({})
  const [keralaWeather, setKeralaWeather] = useState({})
  const [goaWeather, setGoaWeather] = useState({})
  const [tamilWeather, setTamilWeather] = useState({})
  const [assamWeather, setAssamWeather] = useState({})
  const [showDefaults, setShowDefaults] = useState(true)

  
  

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
        setShowDefaults(false)
        
        
        console.log(res)
      })
    }
  }


  useEffect(() => {
    const getAbadweather = () => {
      fetch(`${api.base}weather?q=Gujarat&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(res => {
        setGujWeather(res)
        console.log(res)
      })
    }
    getAbadweather()
    const getDelhiweather = () => {
      fetch(`${api.base}weather?q=Delhi&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(res => {
        setDelhiWeather(res)
        console.log(res)
      })
    }
    getDelhiweather()
    const getBangaloreweather = () => {
      fetch(`${api.base}weather?q=Bangalore&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(res => {
        setBangaloreWeather(res)
        console.log(res)
      })
    }
    getBangaloreweather()

    const getHyderabadweather = () => {
      fetch(`${api.base}weather?q=Hyderabad&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(res => {
        setHyderabadWeather(res)
        console.log(res)
      })
    }
    getHyderabadweather()
    const getKeralaweather = () => {
      fetch(`${api.base}weather?q=Kerala&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(res => {
        setKeralaWeather(res)
        console.log(res)
      })
    }
    getKeralaweather()
    const getGoaweather = () => {
      fetch(`${api.base}weather?q=Goa&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(res => {
        setGoaWeather(res)
        console.log(res)
      })
    }
    getGoaweather()
    const getTamilweather = () => {
      fetch(`${api.base}weather?q=TamilNadu&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(res => {
        setTamilWeather(res)
        console.log(res)
      })
    }
    getTamilweather()
    const getAssamweather = () => {
      fetch(`${api.base}weather?q=Assam&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(res => {
        setAssamWeather(res)
        console.log(res)
      })
    }
    getAssamweather()


  }, [])
  



  

  // const runApi = () => {
  //   const temp = fetch(`${api.base}weather?lat=35&lon=139&appid=${api.key}`).then(res => res.json())
  //   console.log(temp)
  // }

  return (
    <div className="App">
      <motion.div
        
        initial={{height: "30vh"}}
        animate={{height: "100%"}} 
        transition={{duration: 0.8, type: "spring"}} 
        
        className="wave-container">
        {/* <Wave fill="#66c2e3"
          paused={false}
          opacity="0.9"
          options={{
            height: 20,
            amplitude: 40,
            speed: 0.2,
            points: 3,
          }}>
          </Wave> */}
         
        </motion.div>
        
        <div className="searchbox">
            <motion.input
             initial={{top: -70}}
             animate={{top: 0}}
             transition={{duration: 1.2}}
             
             type="text" placeholder='Enter a location'
            onChange={e => setQuery(e.target.value)}
            value={query} 
            onKeyPress={search} 
            // onSubmit={heightUp}
            className='search'

            
            />
        </div>
        {showDefaults ? 
        <div className='default-weathers' id='default'>
          <motion.div 
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{duration: 0.4}}
            className="location">
              <h1 id='weatherMain'>{gujWeather.name}, {gujWeather.sys?.country}</h1>
              <motion.div 
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{type: 'spring', duration: 0.8}}
              className="current-temp abad">
                <p className='temp'>{gujWeather.main?.temp} °C</p>
                <p className='temp-max-min'>Max: {gujWeather.main?.temp_max} °C <br /> Min: {gujWeather.main?.temp_min} °C</p>

              </motion.div>
            </motion.div>
            
            
            <motion.div 
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{duration: 0.6}}
            className="location">
              <h1 id='weatherMain'>{delhiWeather.name}, {delhiWeather.sys?.country}</h1>
              <motion.div 
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{type: 'spring', duration: 0.8}}
              className="current-temp abad">
                <p className='temp'>{delhiWeather.main?.temp} °C</p>
                <p className='temp-max-min'>Max: {delhiWeather.main?.temp_max} °C <br /> Min: {delhiWeather.main?.temp_min} °C</p>
                {/* <p className=''>{delhiWeather.weather[0].main}</p> */}
              </motion.div>
            </motion.div>

            <motion.div 
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{duration: 0.8}}
            className="location">
              <h1 id='weatherMain'>{bangaloreWeather.name}, {bangaloreWeather.sys?.country}</h1>
              <motion.div 
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{type: 'spring', duration: 0.8}}
              className="current-temp abad">
                <p className='temp'>{bangaloreWeather.main?.temp} °C</p>
                <p className='temp-max-min'>Max: {bangaloreWeather.main?.temp_max} °C <br /> Min: {bangaloreWeather.main?.temp_min} °C</p>
                {/* <p className=''>{bangaloreWeather.weather[0].main}</p> */}
              </motion.div>
            </motion.div>

            <motion.div 
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{duration: 1}}
            className="location">
              <h1 id='weatherMain'>{hyderabadWeather.name}, {hyderabadWeather.sys?.country}</h1>
              <motion.div 
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{type: 'spring', duration: 0.8}}
              className="current-temp abad">
                <p className='temp'>{hyderabadWeather.main?.temp} °C</p>
                <p className='temp-max-min'>Max: {hyderabadWeather.main?.temp_max} °C <br /> Min: {hyderabadWeather.main?.temp_min} °C</p>
                {/* <p className=''>{bangaloreWeather.weather[0].main}</p> */}
              </motion.div>
            </motion.div>

            <motion.div 
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{duration: 1}}
            className="location">
              <h1 id='weatherMain'>{keralaWeather.name}, {keralaWeather.sys?.country}</h1>
              <motion.div 
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{type: 'spring', duration: 0.8}}
              className="current-temp abad">
                <p className='temp'>{keralaWeather.main?.temp} °C</p>
                <p className='temp-max-min'>Max: {keralaWeather.main?.temp_max} °C <br /> Min: {keralaWeather.main?.temp_min} °C</p>
                {/* <p className=''>{bangaloreWeather.weather[0].main}</p> */}
              </motion.div>
            </motion.div>

            <motion.div 
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{duration: 1}}
            className="location">
              <h1 id='weatherMain'>{goaWeather.name}, {goaWeather.sys?.country}</h1>
              <motion.div 
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{type: 'spring', duration: 0.8}}
              className="current-temp abad">
                <p className='temp'>{goaWeather.main?.temp} °C</p>
                <p className='temp-max-min'>Max: {goaWeather.main?.temp_max} °C <br /> Min: {goaWeather.main?.temp_min} °C</p>
                {/* <p className=''>{bangaloreWeather.weather[0].main}</p> */}
              </motion.div>
            </motion.div>

            <motion.div 
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{duration: 1}}
            className="location">
              <h1 id='weatherMain'>{tamilWeather.name}, {tamilWeather.sys?.country}</h1>
              <motion.div 
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{type: 'spring', duration: 0.8}}
              className="current-temp abad">
                <p className='temp'>{tamilWeather.main?.temp} °C</p>
                <p className='temp-max-min'>Max: {tamilWeather.main?.temp_max} °C <br /> Min: {tamilWeather.main?.temp_min} °C</p>
                {/* <p className=''>{bangaloreWeather.weather[0].main}</p> */}
              </motion.div>
            </motion.div>

            <motion.div 
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{duration: 1}}
            className="location">
              <h1 id='weatherMain'>{assamWeather.name}, {assamWeather.sys?.country}</h1>
              <motion.div 
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{type: 'spring', duration: 0.8}}
              className="current-temp abad">
                <p className='temp'>{assamWeather.main?.temp} °C</p>
                <p className='temp-max-min'>Max: {assamWeather.main?.temp_max} °C <br /> Min: {assamWeather.main?.temp_min} °C</p>
                {/* <p className=''>{bangaloreWeather.weather[0].main}</p> */}
              </motion.div>
            </motion.div>

        </div> : null}
        

        
        
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
