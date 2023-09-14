import React from 'react'

function Nav() {
    return (
        <nav className="py-3 mb-3 border-bottom d-flex justifi-content-center aling-items-center ">
            <div className="container-fluid d-grid gap-3 align-items-center">

                <div className="d-flex align-items-center">
                    <form className="w-100 me-3" role="search">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                    </form>
                    <button type="button" className="btn btn-primary">Buscar</button>
                </div>
            </div>
        </nav>
    )
}

export default Nav