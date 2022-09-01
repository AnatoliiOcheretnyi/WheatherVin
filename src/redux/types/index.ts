export interface HourWeatherForecast {
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
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {pod: string};
  dt_txt: string;
}

export interface ItemWeatherForecast {
  item: HourWeatherForecast;
}

export interface DayWeatherForecast {
  title: string;
  data: Array<HourWeatherForecast>;
}

export interface FiveDaysForecast {
  weatherForecast: Array<DayWeatherForecast>;
}

export interface RootReducer {
  weatherReducer: FiveDaysForecast;
}

export interface CurrentDay {
  route: {
    key: string;
    name: string;
    path: string;
    params: {
      year: number;
      month: number;
      day: number;
      timestamp: number;
      dateString: string;
    };
  };
}
