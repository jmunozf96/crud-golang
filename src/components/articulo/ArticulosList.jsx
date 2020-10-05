import React, {useEffect, useState} from "react";
import ArticuloListDetail from "./ArticuloListDetail";

export default function ArticulosList() {
    const [articulos, setArticulos] = useState([]);
    const [loadData, setLoadData] = useState(true);
    const [id, setID] = useState(null);

    useEffect(() => {
        if (loadData) {
            (async () => {
                const url = 'http://192.168.1.141:8080/articulos/obtenerArticulo';
                const request = await fetch(url);
                const response = await request.json();
                const {data} = response;
                if (data.length > 0) {
                    setArticulos(data);
                }
            })();
            setLoadData(false);
        }
    }, [loadData]);

    useEffect(() => {
        if (id !== null) {
            const newArticles = articulos.filter(articulo => articulo.idarticulo !== id);
            setArticulos(newArticles);
            setID(null);
        }
    }, [id, articulos]);

    const eliminarArticulo = (id) => {
        setID(id);
    };

    return (
        <table className="table table-bordered table-hover">
            <thead className="text-center">
            <tr>
                <th>Nombre</th>
                <th width="15%">Precio</th>
                <th width="15%">Cantidad</th>
                <th width="15%">Total</th>
                <th width="15%">Accion</th>
            </tr>
            </thead>
            <tbody className="table-sm">
            {articulos.length > 0 && id === null &&
            articulos.map((data, i) =>
                <ArticuloListDetail
                    key={i}
                    data={data}
                    eliminar={eliminarArticulo}
                />)
            }
            </tbody>
        </table>
    )
}