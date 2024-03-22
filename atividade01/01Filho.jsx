import React from 'react';

const Filho = ({ altura, peso }) => {
  const calcularIMC = () => {
    return peso / (altura * altura);
  };

  const getIMCMensagem = () => {
    const imc = calcularIMC();
    if (imc < 18) {
      return <h3>Abaixo do peso!</h3>;
    } else if (imc > 25) {
      return <h3>Acima do peso!</h3>;
    } else {
      return <h3>O peso está ideal</h3>;
    }
  };

  return (
    <div>
      <p>Altura: {altura} m</p>
      <p>Peso: {peso} kg</p>
      <p>IMC: {calcularIMC().toFixed(2)}</p>
      {getIMCMensagem()}
    </div>
  );
};

export default Filho;
