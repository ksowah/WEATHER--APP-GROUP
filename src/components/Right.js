import { FiSearch } from 'react-icons/fi'
import "@material-tailwind/react/tailwind.css";


const Right = ({func, feels, hum, max, min, country, description, speed, input, submit, text}) => {
  return (
    <div className="w-1/3 h-full bg-dark-rgba">
        <div className="w-full h-24 pl-8 flex">
            <form className="flex-grow pr-8 h-full flex items-end" onSubmit={submit}>


        <div class="relative z-0 w-full group">
			<input type="text" class="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent 
            border-0 border-b border-gray-400 appearance-none dark:text-white dark:border-gray-600
             dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 peer" onChange={input} value={text}/>
			<label  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 
            scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 
            peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
            peer-focus:scale-75 peer-focus:-translate-y-6">Enter city name</label>
		</div>

            </form>
            <div className="w-24 bg-orange-500 flex items-center justify-center cursor-pointer hover:bg-orange-600" onClick={func}>
                <FiSearch className='text-2xl'/>
            </div>
        </div>

        <div className='h-[36rem] w-full px-8'>
            <div className='h-1/2 flex flex-col border-b border-gray-400 justify-around py-6'>
                <span className='text-gray-400 flex items-center justify-between'>
                    <h2 className="text-sm text-gray-400 font-light">Feels Like</h2>
                    <p className='text-sm'>{feels}°C</p>
                </span>
                <span className='text-gray-400 flex items-center justify-between'>
                    <h2 className="text-sm text-gray-400 font-light">Humidity</h2>
                    <p className='text-sm'>{hum}%</p>
                </span>
                <span className='text-gray-400 flex items-center justify-between'>
                    <h2 className="text-sm text-gray-400 font-light">Max Temperature</h2>
                    <p className='text-sm'>{max}°C</p>
                </span>
                <span className='text-gray-400 flex items-center justify-between'>
                    <h2 className="text-sm text-gray-400 font-light">Min Temperature</h2>
                    <p className='text-sm'>{min}°C</p>
                </span>
            </div>

            <div className='h-1/2 flex flex-col justify-around py-6'>
                <span>
                    <h2 className="text-md text-gray-200 font-normal">Weather Details</h2>
                </span>
                
                <div className='h-2/3 flex flex-col justify-around'>
                    <span className='text-gray-400 flex items-center justify-between'>
                        <h2 className="text-sm font-light">Country</h2>
                        <p className='text-sm'>{country}</p>
                    </span>
                    <span className='text-gray-400 flex items-center justify-between'>
                        <h2 className="text-sm font-light">Description</h2>
                        <p className='text-sm'>{description}</p>
                    </span>
                    <span className='text-gray-400 flex items-center justify-between'>
                        <h2 className="text-sm font-light">Wind Speed</h2>
                        <p className='text-sm'>{speed}m/s</p>
                    </span>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default Right