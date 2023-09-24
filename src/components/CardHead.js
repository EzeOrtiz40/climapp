// import React, { useEffect, useState } from 'react'
// import { getCountries } from '../service/getCountries';
// import { getCity } from '../service/getCity';

// function CardHead() {

//     const [ciudad, setCiudad] = useState([]);
//     // const [paisinfo, setPaises] = useState([]);
//     // const [filtroCountries, setFiltroCountries] = useState([]);
//     // const [filtroCities, setFiltroCities] = useState([]);

//     useEffect(() => {
//         async function fetchCiudades() {
//             try {
//                 const response = await getCity();
//                 setCiudad(response);
//             } catch (error) {
//                 console.log(error);
//             }
//         } fetchCiudades();
//     }, []);

//     // useEffect(() => {
//     //     async function fetchPaises() {
//     //         try {
//     //             const response = await getCountries();
//     //             setPaises(response);
//     //         } catch (error) {
//     //             console.error("Error al obtener la lista de países", error);
//     //         }
//     //     } fetchPaises();
//     // }, []);

//     // const handleInputChange = (e) => {
//     //     const value = e.target.value.toLowerCase();
//     //     setInputValue(value);

//     //     const filtro = paisinfo.filter((country) =>
//     //         country.name.common.toLowerCase().startsWith(value)
//     //     );

//     //     setFiltroCountries(filtro);
//     // }

//     const handleInputChangeCity = (e) => {

//         const value = e.target.value.toLowerCase();
//         setinputValueCity(value);

//         const filtro = ciudad.filter((cities) =>
//             cities.name.toLowerCase().startsWith(value)
//         );
//         setFiltroCities(filtro);
//     }

//     return (
//         <div className='cardhead d-flex justify-content-center align-items-center'>
//             <div className="row">
//                 <div className="col">
//                     <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Country"
//                         aria-label="Country"
//                         list='countries'
//                         onChange={handleInputChange}
//                     />
//                     <datalist id='countries'>
//                         {filtroCountries.map((country, index) => (
//                             <option key={index} value={[country.name.common, country.cca2]}>
//                                 {country.name.common}
//                             </option>
//                         ))}

//                     </datalist>
//                 </div>
//                 <div className="col">
//                     <input
//                         type="text"
//                         className="form-control"
//                         placeholder="City"
//                         aria-label="City"
//                         list='cities'
//                         onChange={handleInputChangeCity}
//                     />
//                     <datalist id='cities'>
//                         {
//                             filtroCities.map((cities, index) =>
//                                 <option key={index} value={cities.name}>
//                                     {
//                                         cities.name
//                                     }

//                                 </option>
//                             )
//                         }

//                     </datalist>
//                 </div>
//             </div>
//         </div>

//     )
// }
// export default CardHead