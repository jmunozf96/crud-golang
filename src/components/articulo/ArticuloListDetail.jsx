import React, {useState} from "react";

export default function ArticuloListDetail({data, eliminar}) {
    const [articulo, setArticulo] = useState(data);
    const [edicion, setEdicion] = useState(false);


    function edicionActive() {
        setEdicion(!edicion);
    }

    function saveArticulo() {
        setEdicion(false);
        console.log(articulo);
        /**/
        (async () => {
            const url = `http://192.168.1.141:8080/articulos/actualizarArticulo/${articulo.idarticulo}`;
            const configuracion = {
                method: 'PATCH',
                body: JSON.stringify(articulo),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            };
            const request = await fetch(url, configuracion);
            const response = await request.json();
            console.log(response);
        })();
    }

    function onChange(e) {
        setArticulo({
            ...articulo,
            [e.target.name]: +e.target.value === 0 ? "" : +e.target.value,
            total: (e.target.name === "precio" ? +articulo.cantidad * +e.target.value : +articulo.precio * +e.target.value)
        })
    }

    return (
        <tr>
            <td>{!edicion ? articulo.nombre :
                <input type="text" className="form-control" value={articulo.nombre}
                       onChange={(e) => setArticulo({
                           ...articulo,
                           nombre: e.target.value
                       })}/>}</td>
            <td className="text-center" width="15%">
                {!edicion ? articulo.precio :
                    <input type="number" className="form-control text-center" name="precio" value={articulo.precio}
                           onChange={(e) => onChange(e)}/>}
            </td>
            <td className="text-center" width="15%">
                {!edicion ? articulo.cantidad :
                    <input type="number" className="form-control text-center" name="cantidad" value={articulo.cantidad}
                           onChange={(e) => onChange(e)}/>}
            </td>
            <td className="text-center" width="15%">{articulo.total}</td>
            <td className="text-center" width="15%">
                <div className="btn-group">
                    {edicion ?
                        <button className="btn btn-success" onClick={() => saveArticulo()}>
                            Guardar
                        </button>
                        :
                        <button className="btn btn-primary" onClick={() => edicionActive()}>
                            Editar
                        </button>
                    }
                    <button className="btn btn-danger" onClick={() => eliminar(articulo.idarticulo)}>
                        Eliminar
                    </button>
                </div>
            </td>
        </tr>
    )
}