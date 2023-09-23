import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
    const companyName = "Alejo Merelli, Ezequiel Ortiz"
    return (

        <footer className="text-body-secondary py-5">
            <div className="container">
                <p className="float-end mb-1">
                    <a href="http://localhost:3000/">Back to top</a>
                </p>
                <p>Developed by {companyName} &copy; {year}</p>
            </div>
        </footer>
    )
}

export default Footer