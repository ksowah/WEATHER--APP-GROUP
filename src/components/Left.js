import React from "react";

const Left = ({temp, city, summery, icon, date}) => {
	return (
		<div
			className="w-2/3 h-full"
			style={{
				backgroundImage: `url(https://ksets.netlify.app/Group/group-weather.jpg)`,
				backgroundSize: "cover",
			}}
		>
			<div className="w-full h-full bg-black-rgba py-8 text-gray-200 flex flex-col justify-between">
				<p className="text-sm pl-8">binary.beasts</p>

				<div className="flex pl-8 bg-very-dark-rgba items-center space-x-4">
					<h2 className="text-[8rem] font-semibold">{temp?.toFixed(1)}°</h2>

					<span className="flex flex-col">
						<h2 className="text-[3.5rem] font-normal">{city}</h2>
						<p className="text-sm ">{date}</p>
					</span>

					<span className="flex flex-col items-center mt-7">

					<img src={`http://openweathermap.org/img/w/${icon}.png`} alt="weather icon" className="animate-bounce"/>
                     
                        <h3 className="text-2xl font-light">{summery}</h3>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Left;
