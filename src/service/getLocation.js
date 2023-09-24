class getLocation {

    async currentLocation() {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        resolve({ latitude, longitude });
                    },
                    (error) => {
                        reject(error);
                    }
                );
            } else {
                reject(new Error("Geolocalizacion no soportada por el navegador"));
            }
        });
    }

    async locationAccuWeatherInfo(openWeatherMap) {
        try {
            const { latitude, longitude } = await this.currentLocation();
            const accuWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${openWeatherMap}&units=metric`;

            const weatherResponse = await fetch(accuWeatherURL);
            const weatherData = await weatherResponse.json();

            return weatherData;

        } catch (error) {
            console.error("Error al obtener los datos", error);
            throw error;
        }
    }
}
export default getLocation;
//Localizacion de la ciudad por coordenadas
//http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=t6AVDk0srcXWetM4l0udCTxsJBMwKYp2&q=-33.6820533%2C%20-65.4228775&language=es&details=true
//accuweather maps
//`https://api.openweathermap.org/data/2.5/weather?lat=${-33.6820529}&lon={-65.4228757}&appid=${accuWeatherKey}&lang=es`