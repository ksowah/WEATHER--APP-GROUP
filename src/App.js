import Left from "./components/Left"
import Right from "./components/Right"
import axios from "axios"
import { useEffect, useState } from "react"

const App = () => {

  const [temp, setTemp] = useState(null)
  const [city, setCity] = useState("")
  const [feels, setFeels] = useState(null)
  const [hum, setHum] = useState(null)
  const [icon, setIcon] = useState(null)
  const [summery, setSummery] = useState("")
  const [max, setMax] = useState(null)
  const [min, setMin] = useState(null)
  const [country, setCountry] = useState(null)
  const [description, setDescription] = useState(null)
  const [speed, setSpeed] = useState(null)
  const [date, setDate] = useState(null)
  const [location, setLocation] = useState("")
  const [dataFetched, setDataFetched] = useState(false)




  
  const getTime = (offset) => {

    let d = new Date();

    let utc = d.getTime() + (d.getTimezoneOffset() * 6000);

    let nd = new Date(utc + (3600*offset));

    setDate(nd.toLocaleString()) 

}


  const fetchData = async (e) => {

    e.preventDefault()
    try{
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
      const data = await res.data
      
      getTime(data.timezone)

      setFeels(data.main.feels_like)
      setHum(data.main.humidity)
      setMax(data.main.temp_max)
      setMin(data.main.temp_min)
      setCountry(data.sys.country)
      setDescription(data.weather[0].description)
      setSpeed(data.wind.speed)
      setTemp(data.main.temp)
      setCity(data.name)
      setSummery(data.weather[0].main)
      setIcon(data.weather[0].icon)
      setDataFetched(true)
      setLocation("")
    }catch(err){
      console.log(err)
      setLocation("")
      alert("Please enter a valid city")
    }

  }

  const fetchDefaultData = async () => {
    if(!dataFetched){
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=accra&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
      const data = await res.data
  
      getTime(data.timezone)
      
      setFeels(data.main.feels_like)
      setHum(data.main.humidity)
      setMax(data.main.temp_max)
      setMin(data.main.temp_min)
      setCountry(data.sys.country)
      setDescription(data.weather[0].description)
      setSpeed(data.wind.speed)
      setTemp(data.main.temp)
      setCity(data.name)
      setSummery(data.weather[0].main)
      setIcon(data.weather[0].icon)
    }
  } 

  useEffect(() => {
    fetchDefaultData()
  })

  return (
    <div className="w-screen min-h-screen overflow-x-hidden"
      style={{backgroundImage: `url(https://ksets.netlify.app/Group/group-weather.jpg)`, backgroundSize: 'cover'}}>
        <div className="w-full h-full px-14 py-20 bg-black-rgba backdrop-blur-3xl flex items-center justify-center">
          <div className="flex items-center w-full h-[42rem] ">

           <Left 
            temp={temp}
            city={city}
            summery={summery}
            icon={icon}
            date={date}
           />

          <Right 
            func={fetchData}
            feels={feels}
            hum={hum}
            max={max}
            min={min}
            country={country}
            description={description}
            speed={speed}
            input={(e) => setLocation(e.target.value)}
            submit={fetchData}
            text={location}
          />
          </div>
        </div>
    </div>
  )
}

export default App