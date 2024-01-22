//Importo le librerie principali di React e ReactDOM

// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';

//Importo il componente Provider da react-redux, che consente di avvolgere l'applicazione React con lo store Redux fornendogli così accesso globale.
import { Provider } from 'react-redux';
import store from './redux/store';

import App from './App';

/*Utilizzo ReactDOM.render per renderizzare l'app React nell'elemento HTML con l'id 'root'. 
L'intera applicazione è avvolta nel componente Provider per dare accesso allo store Redux a tutti i componenti figli.*/
// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);