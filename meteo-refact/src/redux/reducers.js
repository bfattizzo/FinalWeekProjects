import cloud_icon from "../assets/cloud.png"

const initialState = {
    weatherData: {  //Contiene le informazioni meteorologiche iniziali con valori vuoti.
      humidity: '',
      wind: '',
      temperature: '',
      location: '',
    },
    weatherIcon: cloud_icon,  //Icona predefinita.
  };
  
  const weatherReducer = (state = initialState, action) => {
    switch (action.type) {    //Utilizzo uno switch statement per gestire diversi tipi di azioni migliorando la leggibilità e la manutenibilità qual'ora dovessero esserci cambiamenti.
      case 'SET_WEATHER_DATA':
        return {
          ...state,
          weatherData: action.payload,
        };
      case 'SET_WEATHER_ICON':
        return {
          ...state,
          weatherIcon: action.payload,
        };
      default:
        return state;
    }
  };
  
  //Esporto il riduttore in modo che possa essere utilizzato nell'applicazione React.
  export default weatherReducer;