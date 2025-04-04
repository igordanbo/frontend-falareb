import './Loader.css'
import { useState, useEffect } from "react";

const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simula uma requisição assíncrona (exemplo: busca de API)
        setTimeout(() => {
            setLoading(false);
        }, 3000); // Simulando 2 segundos de carregamento
    }, []);

    return (
        <div>
            {loading ? 
                <div className="loader">
                    <div className="inner_loader"></div>
                </div>
            : ''}
        </div>
    );
};

export default Loader;