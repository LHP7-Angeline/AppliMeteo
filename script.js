document.getElementById('searchCity').addEventListener('click', () => {
    let city = document.getElementById('search').value;
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=6a7a840aa12869728b10fb945f65e36a&units=metric`;
    getActualWeather();
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
        let months = ['Janv.', 'Fév.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'];

        document.getElementById('localisation').textContent = data.city.name;
        document.getElementById('country').textContent = `${data.city.country} > ${data.city.name}`;

        let actual = new Date(data.list[0].dt*1000);
        document.getElementById('actualDay').textContent = days[actual.getDay()];
        document.getElementById('iconActualDay').innerHTML = `<img class="iconify" src="http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png" alt="">`;
        document.getElementById('maxActualDay').innerHTML = `Temp. <strong>${Math.round(data.list[0].main.temp)}°</strong>`;

        let j1Day = new Date(data.list[8].dt*1000);
        document.getElementById('dayJ1').textContent = days[j1Day.getDay()];
        document.getElementById('iconJ1').innerHTML = `<img class="iconify" src="http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png" alt="">`;
        document.getElementById('maxJ1').innerHTML = `Temp.<strong>${Math.round(data.list[8].main.temp)}°</strong>`;

        let j2Day = new Date(data.list[16].dt*1000);
        document.getElementById('dayJ2').textContent = days[j2Day.getDay()];
        document.getElementById('dateJ2').textContent = `${j2Day.getDate()} ${months[j2Day.getMonth()]}`;
        document.getElementById('iconJ2').innerHTML = `<img class="iconify" src="http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png" alt="">`;
        document.getElementById('maxJ2').innerHTML = `Temp.<strong>${Math.round(data.list[16].main.temp)}°</strong>`;

        

        document.getElementById('dateWeather').textContent = `Météo journalière du ${new Date(data.list[0].dt*1000).getDate()} ${months[new Date(data.list[0].dt*1000).getMonth()]}`;
        document.getElementById('hourOne').textContent = `${new Date(data.list[0].dt*1000).getHours()} h`;
        document.getElementById('hourTwo').textContent = `${new Date(data.list[1].dt*1000).getHours()} h`;
        document.getElementById('hourThree').textContent = `${new Date(data.list[2].dt*1000).getHours()} h`;
        document.getElementById('hourFour').textContent = `${new Date(data.list[3].dt*1000).getHours()} h`;
        document.getElementById('iconTwelve').innerHTML = `<img class="iconify" src="http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png" alt="">`;
        document.getElementById('iconThreePM').innerHTML = `<img class="iconify" src="http://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png" alt="">`;
        document.getElementById('iconSixPM').innerHTML = `<img class="iconify" src="http://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@2x.png" alt="">`;
        document.getElementById('iconNinePM').innerHTML = `<img class="iconify" src="http://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png" alt="">`;
        document.getElementById('tempTwelve').innerHTML = `Temp. <strong>${Math.round(data.list[0].main.temp)}</strong>°`;
        document.getElementById('tempThreePM').innerHTML = `Temp. <strong>${Math.round(data.list[1].main.temp)}</strong>°`;
        document.getElementById('tempSixPM').innerHTML = `Temp. <strong>${Math.round(data.list[2].main.temp)}</strong>°`;
        document.getElementById('tempNinePM').innerHTML = `Temp. <strong>${Math.round(data.list[3].main.temp)}</strong>°`;

        let j3Day = new Date(data.list[24].dt*1000);
        document.getElementById('dayJ3').textContent = days[j3Day.getDay()];
        document.getElementById('iconJ3').innerHTML = `<img class="iconify" src="http://openweathermap.org/img/wn/${data.list[24].weather[0].icon}@2x.png" alt="">`;
        document.getElementById('tempJ3').innerHTML = `Temp.<strong>${Math.round(data.list[24].main.temp)}°</strong>`;

        let j4Day = new Date(data.list[32].dt*1000);
        document.getElementById('dayJ4').textContent = days[j4Day.getDay()];
        document.getElementById('iconJ4').innerHTML = `<img class="iconify" src="http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png" alt="">`;
        document.getElementById('tempJ4').innerHTML = `Temp.<strong>${Math.round(data.list[32].main.temp)}°</strong>`;
        
        let j5Day = new Date(data.list[39].dt*1000);
        document.getElementById('dayJ5').textContent = days[j5Day.getDay()];
        document.getElementById('iconJ5').innerHTML = `<img class="iconify" src="http://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png" alt="">`;
        document.getElementById('tempJ5').innerHTML = `Temp.<strong>${Math.round(data.list[39].main.temp)}°</strong>`;

        })
        
    })


function getActualWeather(){
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=le havre&appid=6a7a840aa12869728b10fb945f65e36a&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById('localisation').textContent = data.city.name;
        document.getElementById('country').textContent = `${data.city.country} > ${data.city.name}`;

        let days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
        let months = ['Janv.', 'Fév.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'];
        
        let actual = new Date(data.list[0].dt*1000);
        document.getElementById('actualDay').textContent = days[actual.getDay()];
        document.getElementById('iconActualDay').innerHTML = `<img class="iconify" src="http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png" alt="">`;
        document.getElementById('maxActualDay').innerHTML = `Temp. <strong>${Math.round(data.list[0].main.temp)}°</strong>`;

        let j1Day = new Date(data.list[8].dt*1000);
        document.getElementById('dayJ1').textContent = days[j1Day.getDay()];
        document.getElementById('iconJ1').innerHTML = `<img class="iconify" src="http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png" alt="">`;
        document.getElementById('maxJ1').innerHTML = `Temp.<strong>${Math.round(data.list[8].main.temp)}°</strong>`;

        let j2Day = new Date(data.list[16].dt*1000);
        document.getElementById('dayJ2').textContent = days[j2Day.getDay()];
        document.getElementById('dateJ2').textContent = `${j2Day.getDate()} ${months[j2Day.getMonth()]}`;
        document.getElementById('iconJ2').innerHTML = `<img class="iconify" src="http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png" alt="">`;
        document.getElementById('maxJ2').innerHTML = `Temp.<strong>${Math.round(data.list[16].main.temp)}°</strong>`;
        document.getElementById('dateWeather').textContent = `Météo journalière du ${new Date(data.list[0].dt*1000).getDate()} ${months[new Date(data.list[0].dt*1000).getMonth()]}`;
        document.getElementById('hourOne').textContent = `${new Date(data.list[0].dt*1000).getHours()} h`;
        document.getElementById('hourTwo').textContent = `${new Date(data.list[1].dt*1000).getHours()} h`;
        document.getElementById('hourThree').textContent = `${new Date(data.list[2].dt*1000).getHours()} h`;
        document.getElementById('hourFour').textContent = `${new Date(data.list[3].dt*1000).getHours()} h`;
        document.getElementById('iconTwelve').innerHTML = `<img class="iconify" src="http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png" alt="">`;
        document.getElementById('iconThreePM').innerHTML = `<img class="iconify" src="http://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png" alt="">`;
        document.getElementById('iconSixPM').innerHTML = `<img class="iconify" src="http://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@2x.png" alt="">`;
        document.getElementById('iconNinePM').innerHTML = `<img class="iconify" src="http://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png" alt="">`;
        document.getElementById('tempTwelve').innerHTML = `Temp. <strong>${Math.round(data.list[0].main.temp)}</strong>°`;
        document.getElementById('tempThreePM').innerHTML = `Temp. <strong>${Math.round(data.list[1].main.temp)}</strong>°`;
        document.getElementById('tempSixPM').innerHTML = `Temp. <strong>${Math.round(data.list[2].main.temp)}</strong>°`;
        document.getElementById('tempNinePM').innerHTML = `Temp. <strong>${Math.round(data.list[3].main.temp)}</strong>°`;

        let j3Day = new Date(data.list[24].dt*1000);
        document.getElementById('dayJ3').textContent = days[j3Day.getDay()];
        document.getElementById('iconJ3').innerHTML = `<img class="iconify" src="http://openweathermap.org/img/wn/${data.list[24].weather[0].icon}@2x.png" alt="">`;
        document.getElementById('tempJ3').innerHTML = `Temp.<strong>${Math.round(data.list[24].main.temp)}°</strong>`;

        let j4Day = new Date(data.list[32].dt*1000);
        document.getElementById('dayJ4').textContent = days[j4Day.getDay()];
        document.getElementById('iconJ4').innerHTML = `<img class="iconify" src="http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png" alt="">`;
        document.getElementById('tempJ4').innerHTML = `Temp.<strong>${Math.round(data.list[32].main.temp)}°</strong>`;
        
        let j5Day = new Date(data.list[39].dt*1000);
        document.getElementById('dayJ5').textContent = days[j5Day.getDay()];
        document.getElementById('iconJ5').innerHTML = `<img class="iconify" src="http://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png" alt="">`;
        document.getElementById('tempJ5').innerHTML = `Temp.<strong>${Math.round(data.list[39].main.temp)}°</strong>`;

        })
}    

getActualWeather()