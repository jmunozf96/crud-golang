import React from "react";
import ArticulosList from "./ArticulosList";

export default function Articulo({children}) {
    return (
        <div className="container-fluid mt-3">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="m-0">Listado de Articulos</h5>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12 table-responsive">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}