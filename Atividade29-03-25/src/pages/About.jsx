import { useNavigate } from 'react-router-dom';
import '../css/About.css';

function About() {
    const navigate = useNavigate();

    function irparaHome() {
        navigate('/');
    }

    return (
        <div className="about-container">
            <h1 className="about-title">Página Inicial - About</h1>
            <button onClick={irparaHome}>Voltar ao Inicio</button>
        </div>
    );
}

export default About;