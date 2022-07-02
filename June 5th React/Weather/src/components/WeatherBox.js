import React from 'react';
import { Card } from 'react-bootstrap'; //Card라는 폼? UI? 사용
// 부모에서 데이터를 내려줌

const WeatherBox = ({ weather }) => { //부모에서 내려준 weather을 weather박스에서 받음
    // 화씨,섭씨 계산하는 부분
  const temperatureC =
    weather && weather.main ? (weather.main.temp - 273.15).toFixed(2) : ''; //소수점 2자리까지 표현
  const temperatureF =
    weather && weather.main
      ? (((weather.main.temp - 273.15) * 9) / 5 + 32).toFixed(2)
      : '';
  return ( //HTML 태그들이 전부 Card로 바뀌었음
    <Card className="weather-card">
         {/* <Card.Img src="holder.js/100px270" alt="Card image" /> */}
      <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center"> {/*오버레이*/}
        <Card.Title>{weather?.name}</Card.Title> {/* 도시 받아오는 것 */}
        <Card.Text className="text-success h1">
          {`${temperatureC} °C / ${temperatureF} °F`} {/*계산된 온도 받아온 것*/}
        </Card.Text>
        <Card.Text className="text-info text-uppercase h2">
          {weather && weather.weather[0]?.description} {/*날씨 정보(흐림, 맑음 등 json파일 내부에 있음) 받아오는 것*/}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default WeatherBox;
