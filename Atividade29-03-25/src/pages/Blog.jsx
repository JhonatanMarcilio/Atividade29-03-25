import { Link, useNavigate } from 'react-router-dom';
import '../css/blog.css';
import '../css/Button.css';

function Blog() {
    const navigate = useNavigate();

    function irparaHome() {
        navigate('/');
    }

    return (
        <div className="blog-container">
            <h1 className="blog-title">Lista de Artigos</h1>
            <ul className="blog-list">
                <li><Link className="blog-link" to="/blog/1">Artigo 1</Link></li>
                <li><Link className="blog-link" to="/blog/2">Artigo 2</Link></li>
                <li><Link className="blog-link" to="/blog/3">Artigo 3</Link></li>
            </ul>

            <button onClick={irparaHome}>Voltar ao Inicio</button>

        </div>
    );
}

export default Blog;