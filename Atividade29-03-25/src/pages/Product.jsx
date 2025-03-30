import { useParams, useNavigate } from 'react-router-dom';
import '../css/Product.css';

function Product() {
    const navigate = useNavigate();
    const { id } = useParams();

    function irParaProdutos() {
        navigate('/Products');
    }

    return (
        <div className="product-container">
            <h1 className="product-title">Detalhes do Produto</h1>
            <p className="product-id">ID do produto: {id}</p>
            <button onClick={irParaProdutos}>Voltar para Produtos</button>
        </div>
    );
}

export default Product;