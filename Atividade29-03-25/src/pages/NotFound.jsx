import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();

    function voltarParaHome() {
        navigate('/');
    }
    return (
        <div>
            <h1>Erro 404</h1>
            <p>Página não encontrada.</p>            
            <button onClick={voltarParaHome}>Voltar ao Inicio</button>
        </div>
    );
}

export default NotFound;