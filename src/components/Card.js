import React, { useEffect, useState } from 'react'
import { getCountries } from '../service/getCountries'
import "../App.css"


function Card() {

    const [countries, setCountries] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const response = await getCountries();
                setCountries(response.data);

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
    //             setCiudad(response.data);
    //             console.log(ciudad);
    //         } catch (error) {
    //             console.log(error);
    //         }

    //     })();
    // }, []);


    return (
        <div className="card  col-md-3">
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Card