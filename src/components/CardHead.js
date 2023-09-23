import React, { useEffect, useState } from 'react'
import { getCountries } from '../service/getCountries';

//import kelvinToCelsius from '../conversions/Unidades'
function CardHead() {


    const [pais, setPais] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [paisinfo, setPaises] = useState([]);
    const [ciudades, setCiudades] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [filtroCountries, setFiltroCountries] = useState([]);


    useEffect(() => {
        async function fetchPaises() {
            try {
                const response = await getCountries();
                setPaises(response);
            } catch (error) {
                console.error("Error al obtener la lista de países", error);
            }
        }

        fetchPaises();
    }, []);



    const handleInputChange = (e) => {
        const value = e.target.value.toLowerCase();
        setInputValue(value);

        const filtro = paisinfo.filter((country) =>
            country.name.common.toLowerCase().startsWith(value)
        );

        setFiltroCountries(filtro);
    }



    return (
        <div className='cardhead d-flex justify-content-center align-items-center'>
            <div className="row">
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Country"
                        aria-label="Country"
                        list='countries'
                        onChange={handleInputChange}
                    />
                    <datalist id='countries'>
                        {filtroCountries.map((country, index) => (
                            <option key={index} value={[country.name.common, country.cca2]}>
                                {country.name.common}
                            </option>
                        ))}

                    </datalist>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Province" aria-label="province" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="City" aria-label="City" />
                </div>
            </div>
        </div>

    )
}

export default CardHead