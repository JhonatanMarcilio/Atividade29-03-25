import React, { useState } from 'react';

function SimpleForm() {
  const [inputValue, setInputValue] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Previna o comportamento padrão de recarregar a página
    setSubmittedText(inputValue);
    setInputValue(''); // Limpa o campo de entrada após o envio
  };

  return (
    <div className="simple-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Digite algo..."
        />
        <button type="submit">Enviar</button>
      </form>
      {submittedText && <p>Texto enviado: {submittedText}</p>}
    </div>
  );
}

export default SimpleForm;