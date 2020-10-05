import React from 'react';
import Articulo from "./components/articulo";
import ArticulosList from "./components/articulo/ArticulosList";

function App() {
    return (
        <div className="App">
            <Articulo>
                <ArticulosList/>
            </Articulo>
        </div>
    );
}

export default App;
