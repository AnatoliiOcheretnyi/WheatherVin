export interface WeatherForecast {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: Array<{id: number; main: string; description: string; icon: string}>;
  clouds: {all: number};
  wind: {
    spped: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {pod: string};
  dt_txt: string;
}

export interface ApiResult {
  cod: string;
  message: number;
  list: Array<WeatherForecast>;
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}
