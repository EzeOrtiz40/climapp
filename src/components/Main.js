import React from 'react'
import Cards from './Cards'
import CardHead from './CardHead'
import GeoLocation from './GeoLocation'

function Main() {
    return (
        <div className='container'>
            <GeoLocation />
            <div className='separador'></div>
            <Cards />
        </div>
    )
}
export default Main

