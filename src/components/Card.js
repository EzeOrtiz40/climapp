import React, { useEffect, useState } from 'react'
import { getCountries } from '../service/getCountries'


function Card() {

    const [countries, setCountries] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const response = await getCountries();
                setCountries(response);
                console.log(countries);
            } catch (error) {
                console.log(error);

            }
        })();
    }, []);

    // const [ciudad, setCiudad] = useState([]);

    // useEffect(() => {

    //     (async () => {
    //         try {
    //             const response = await getCity(options);
    //             setCiudad(response);
    //             console.log(response.data);
    //         } catch (error) {
    //             console.log(error);
    //         }

    //     })();
    // }, []);


    return (
        <div class="col">
            <div class="card shadow-sm">

                <div class="card-body">
                    <label >Ingresa un pais{" "}</label>
                    <select none="">
                        <option value="Buscar">A</option>
                    </select>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small class="text-body-secondary">9 mins</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card