const API_KEY = "pon_tu_api_key_aqui"

const URL = 'https://openweathermap.org/current';

const button = document.getElementById("sendButton");
const main = document.getElementById("main");
const inputElement = document.getElementById("search");
 
button.addEventListener("click", ()=>{
  searchWeather(inputElement.value);
});

function searchWeather(wordToSearch){
  console.log('Palabra', wordToSearch);

  // URL DE SEARCH:
  const fetchPromise = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${wordToSearch}&appid=${API_KEY}&lang=es&units=metric`);

  fetchPromise.then(response => {
    console.log('result', response);
    return response.json();
  }).then(result => {
    console.log('data', result);
    madeGrid(result);
  }).catch(err =>{
    console.log('Ohhh fallo!: ', err);
  });

}

function madeGrid(data){
 
  const temp =data.main.temp;
  console.log(temp);
  
  const tempmin =data.main.temp_min;
  console.log(tempmin);
  
  const tempmax =data.main.temp_max;
  console.log(tempmax);
  
  const humidity =data.main.humidity;
  console.log(humidity);
  
  const pressure =data.main.pressure;
  console.log(pressure);
  
  const feels_like =data.main.feels_like;
  console.log(feels_like);
  
  const speed =data.wind.speed;
  console.log(speed);
  
  const nom =data.name;
  console.log(nom);
  
 const images = data.weather[0].icon;


		switch (data.weather[0].icon) {
		  case '01d':
		   images.src ="icon/01d.png";
			break;
		  case '01n':
			images.src ="icon/01n.png";
			break;
		  case '02d':
			images.src ="icon/02d.png";
			break;
		  case '02n':
			images.src ="icon/02n.png";
			break;
		  case '03d':
			images.src ="icon/03d.png";
			break;
		  case '03n':
		  images.src ="icon/03n.png";
			break;
		  case '04d':
		  images.src ="icon/04d.png";  
			break;
		  case '04n':
		  images.src ="icon/04n.png";  
			break;
		  case '11d':
		  images.src ="icon/11d.png";  
		  break;
		  case '11n':
		  images.src ="icon/11n.png";  
		  break;
		  case '09d':
		  images.src ="icon/09d.png";  
		  break;
		  case '09n':
		  images.src ="icon/09n.png";  
		  break;
		  case '10d':
		  images.src ="icon/10d.png";  
		  break;
		  case '10n':
		  images.src ="icon/10n.png";  
		  break;
		  case '13d':
		  images.src ="icon/13d.png";  
		  break;
		  case '13n':
		  images.src ="icon/13n.png";  
		  break;
		  case '50d':
		  images.src ="icon/50d.png";  
		  break;
		  case '50n':
		  images.src ="icon/50n.png";  
		  break;
		  default:
		  alert('No se encontro la expresion');
			console.log('No se encontro la expresion.');
		}
console.log('images html', images);

 
  main.innerHTML = `<ul><li>Ciudad: ${nom}</li><li><img src="icon/${images}.png" /></li><li>Temperatura actual: ${temp}</li><li>Temperatura minima:${tempmin}</li><li>Temperatura maxima: ${tempmax}</li><li>Humedad: ${humidity} %</li><li>Presion astomerica: ${pressure}</li><li>Sensación térmica: ${feels_like}</li><li>Velocidad de viento: ${speed}</li></ul>`

  }
  
 
//window.localStorage.setItem('user', JSON.stringify();
//window.localStorage.getItem('user');
