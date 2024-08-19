/*import React from 'react';
import Pai from './components/01Pai';

const App = () => {
  return (
    <div>
      <h1>IMC</h1>
      <Pai />
    </div>
  );
};

export default App;*/ 



import React from 'react';
import { PlacaMae as PCPlacaMae, Memoria as PCMemoria, PlacaDeVideo as PCPlacaDeVideo } from './components/atividade01/02MeuPC';

const App = () => {
  return (
    <div>
      <h1>Meu PC</h1>
      <PCPlacaMae nome="ASUS Prime" preco={500} />
      <PCMemoria nome="Corsair Vengeance" preco={300} />
      <PCPlacaDeVideo nome="Nvidia RTX 3080" preco={1500} />
    </div>
  );
};

export default App;
