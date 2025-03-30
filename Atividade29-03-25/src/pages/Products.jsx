import { Link, useNavigate } from 'react-router-dom';
import '../css/Products.css';

function Products() {
    const navigate = useNavigate();
    
    function irparaHome() {
        navigate('/');
    }
    
    return (
        <div className="products-container">
            <h1 className="products-title">Lista de Produtos</h1>
            <ul className="products-list">
                <li><Link className="products-link" to="/product/1">Produto 1</Link></li>
                <li><Link className="products-link" to="/product/2">Produto 2</Link></li>
                <li><Link className="products-link" to="/product/3">Produto 3</Link></li>
            </ul>

            <button onClick={irparaHome}>Voltar ao Inicio</button>

        </div>        
    );
}

export default Products;