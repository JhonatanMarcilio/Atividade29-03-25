import { useNavigate } from 'react-router-dom';
import '../css/Home.css';
import '../css/Button.css';

function Home() {
    const navigate = useNavigate();

    function irParaProdutos() {
        navigate('/products');
    }

    return (
        <div className="home-container">
            <h1 className="home-title">Página Inicial</h1>
            <button onClick={irParaProdutos}>Ver Produtos</button>
        </div>
    );
}

export default Home;