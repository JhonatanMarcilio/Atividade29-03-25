import { useNavigate } from 'react-router-dom';
import '../css/Contact.css';

function Contact() {
    const navigate = useNavigate();

    function handleSubmit() {
        alert('Mensagem enviada!');
        navigate('/'); // Redireciona para a página inicial
    }

    return (
        <div className="contact-container">
            <h1 className="contact-title">Contato</h1>
            <button onClick={handleSubmit}>Enviar Mensagem</button>
        </div>
    );
}

export default Contact;