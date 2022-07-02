import React, { useState, useEffect } from 'react'; //useState와 useEffect를 사욯하니까 가져옴
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import WeatherButton from './components/WeatherButton';
import WeatherBox from './components/WeatherBox';
import { ClipLoader } from 'react-spinners';

const cities = ['paris', 'new york', 'tokyo', 'seoul'];
const API_KEY = 'c9b7fad4b828380e3c4ce3d22f44bd08';

const App = () => {
  const [loading, setLoading] = useState(false); //로딩 정보, useState로 초기값 false를 준다, 데이터를 가져올때 로딩이 실행되야한다.
  const [city, setCity] = useState(null); //도시 정보, 어떤 city를 뿌릴지는 Button(자식)에 있을것이다. = 부모는 데이터만 가지고 있겠다.
  const [weather, setWeather] = useState(null); //날씨 정보
  const [apiError, setAPIError] = useState(''); //딱히 필요는 없지만 사용

  // 현재지역 = 대구의 날씨 정보 가져오기
  const getWeatherByCurrentLocation = async (lat, lon) => { //하단의 let url에서 lat,lon의 값을 가져와서 (위도,경도)에 넣을 함수
    console.log('현재 위치', lat, lon); 
    //비동기 처리
    try { //url가져오기위한 try-catch 구문
      let url = //units=metric 이란? 캘빈법을 미터법으로 계산을 바꾸는 것, But 계산식이 오류발생 = 그래서 뺏음
        'http://api.openweathermap.org/data/2.5/weather?lat=35.87222&lon=128.60250&appid=c9b7fad4b828380e3c4ce3d22f44bd08'; 
        // 대구 위도 경도가 불안해서 위도경도를 정해준것 
     // `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`; //$()로 동적데이터를 넣어줌
     // `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`; //원하는 도시 ${city}
        
        //setLoading(true); //요청할때 굳이 로딩이 필요할까?
        const res = await fetch(url); //url 요청에 대한 응답받기, 비동기 사용(await) -> 값을 받는곳에 async 사용하게 함(문법)
        const data = await res.json(); //json파일로 응답받은것을 데이터에 저장
        setWeather(data); //현재지역의 날씨 json데이터를 setWeather메소드에 넣음
        setLoading(false); //await가 끝나면 false로
    } catch (err) { //에러메시지가 나오면 에러를 표시해라!!
      setAPIError(err.message);
      setLoading(false); //에러발생시에는 로딩이 필요없다.
    }
  };
  //현재위치 정보를 가져오는 함수 await를 안써서 async을 안쓴것을 알 수 있다.
  const getCurrentLocation = () => {  
    navigator.geolocation.getCurrentPosition((position) => {  //position을 바로 불러오는 함수 만듬
      const { latitude, longitude } = position.coords; //(위도,경도) 불러오기
      getWeatherByCurrentLocation(latitude, longitude); //위도 경도 값을 위로 호출
      // console.log('현재 위치', lat, lon);
    });
  };

  // 원하는 도시별 날씨정보 보기
const getWeatherByCity = async () => {
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`; //원하는 도시 = ${city}
      //&units=metric

      // setLoading(true);  
      const res = await fetch(url); //외부에서 가져오기 때문에 외부 정보의 documnet를 잘 봐야함
      const data = await res.json();   
      setWeather(data);   //도시의 날씨정보를 담고있음   
      setLoading(false);
    } catch (err) {
    console.log(err);
    setAPIError(err.message);
    setLoading(false);
  }
};

// 함수
useEffect(() => {
  if (city == null) { //city의 정보가 없으면?
    setLoading(true); //실제로 도시를 가져올때는 로딩이 필요하겠다.
    getCurrentLocation(); //현재지역의 위치정보를 불러온다.
  } else {              //아니라면? 도시정보가 있다면?
    setLoading(true);
    getWeatherByCity(); // 원하는 도시의 날씨 정보를 불러온다.
  }
}, [city]);
// current가 한번만 나오고 누를때마다 계속 안불러와진다 = handle함수로 받아오게 하는 '기법'
const handleCityChange = (city) => {
  if (city === 'current') { //city가 current이면?
    setCity(null);  //setcity를 비운다
  } else {
    setCity(city);
  }
};

  return (
    <Container className="vh-100">
    {loading ? (
      <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
        <ClipLoader color="#f86c6b" size={150} loading={loading} />
      </div>
    ) : !apiError ? (
      <div class="main-container">
        <WeatherBox weather={weather} /> {/*WeatherBox에 넘겨줘야 하는 데이터는 weather데이터*/}
        <WeatherButton
          cities={cities} //배열객체를 넘겨주고
          handleCityChange={handleCityChange} //이벤트 넘겨주고
          selectedCity={city} // cities중에 어느 city인가
        />
      </div>
    ) : (
      apiError
    )}
  </Container>
  );
};

export default App;
