import React from 'react';
import { Button } from 'react-bootstrap';
// 버튼의 내용이 나오는 곳은 WeatherBox다. 이벤트 발생시 부모가 데이터를 줌 = Weatherbox랑의 차이
const WeatherButton = ({ cities, selectedCity, handleCityChange }) => {
  return (
    <div class="menu-container">
      <Button
      //variant로 버튼의 용도(생김새)가 정해져있음
        variant={`${selectedCity === null ? 'outline-warning' : 'warning'}`} 
                    //선택했으면 null이 되니까 warning버튼의 outline(테두리)만 가져오고 나머지는 채워져있는 warning 버튼으로 만듬
        onClick={() => handleCityChange('current')}
      >
        Current Location
      </Button>

      {cities.map((city) => ( //배열(cities)의 값을 가져올 때 map 함수 사용함
        <Button
          variant={`${selectedCity === city ? 'outline-warning' : 'warning'}`}
          onClick={() => handleCityChange(city)}
        >
          {city}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
