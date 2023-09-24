import React, { useEffect, useState } from 'react';
import getLocation from '../service/getLocation';
import { openWeatherMap } from '../constant/constants';
import Spinner from './Spinner';

function GeoLocation() {
    const [weatherData, setLocation] = useState(null);

    useEffect(() => {
        async function fetchLocation() {
            try {
                const getLocationService = new getLocation();
                const weatherData = await getLocationService.locationAccuWeatherInfo(openWeatherMap);
                setLocation(weatherData);
            } catch (error) {
                console.log(error);
            }
        } fetchLocation();
    }, [])

    return (
        <div className='cardhead d-flex justify-content-center align-items-center'>
            {weatherData ? (
                <p>
                    Ciudad: {weatherData.name}, Temperatura: {weatherData.main.temp}°C <br />
                    Estado: {weatherData.weather[0].main}
                </p>

            ) : (
                <Spinner />
            )}
        </div>
    )
}
export default GeoLocation