import React, { useState } from 'react';

function ToggleText() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="toggle-text">
      <button onClick={toggleVisibility}>
        {isVisible ? 'Ocultar' : 'Mostrar'}
      </button>
      {isVisible && <p>Olá, Esta sendo divertido trabalhar com React !!!</p>}
    </div>
  );
}

export default ToggleText;