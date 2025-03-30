import { useNavigate, useParams } from "react-router-dom";
import '../css/BlogPost.css';
import '../css/Button.css';

function BlogPost() {
    const { id } = useParams();
    const navigate = useNavigate();

    function voltarParaBlog() {
        navigate('/Blog');
    }

    return (
        <div className="blogpost-container">
            <h1 className="blogpost-title">Postagem do Blog</h1>
            <p className="blogpost-id">Você está lendo o post do ID: {id}</p>
            <button onClick={voltarParaBlog}>Voltar para o Blog</button>
        </div>
    );
}

export default BlogPost;