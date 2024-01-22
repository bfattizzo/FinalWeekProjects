
// Azione Redux per impostare i dati meteorologici nello store.
export const setWeatherData = (data) => ({  //è una funzione redux che ritorna un oggetto.
    type: 'SET_WEATHER_DATA',  //Tipo di azione, che identifica l'operazione da eseguire nel riduttore.
    payload: data,  //Dati associati all'azione, in questo caso, rappresentano le informazioni meteorologiche.
  });
  
  // Azione Redux per impostare l'icona meteorologica nello store.
  export const setWeatherIcon = (icon) => ({  //Azione Redux per impostare l'icona meteorologica nello store.
    type: 'SET_WEATHER_ICON',  //Tipo di azione utilizzato dal riduttore per identificare l'operazione da eseguire.
    payload: icon,  //Dati associati all'azione che in questo caso rappresentano l'icona meteorologica.
  });