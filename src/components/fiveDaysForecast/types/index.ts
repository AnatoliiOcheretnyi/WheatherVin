export interface SpecifiedDayForecastScreenProps {
  route: {
    params: {
      day: {
        year: number;
        month: number;
        day: number;
        timestamp: number;
        dateString: string;
      };
    };
  };
}

export interface SpecifiedDayProps {
  day: {
    year: number;
    month: number;
    day: number;
    timestamp: number;
    dateString: string;
  };
}

export interface SectionTitleProps {
  section: {
    title: string;
  };
}
