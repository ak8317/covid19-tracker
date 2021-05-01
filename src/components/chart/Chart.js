import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import DataContext from '../../context/dataContext';

const Chart = () => {
  const dataContext = useContext(DataContext);
  const { timeSeriesData } = dataContext;

  const changeFormat = (date) => {
    const d = new Date(date).toLocaleDateString('default', { month: 'long' });
    const y = new Date(date).getFullYear();

    return `${d}, ${y}`;
  };
  const lineChart = (
    <Line
      data={{
        labels: timeSeriesData.map(({ date }) => changeFormat(date)),
        datasets: [
          {
            data: timeSeriesData.map((data) => data.dailyconfirmed),
            label: 'Confirmed',
            borderColor: '#3333ff',
            fill: false,
          },

          {
            data: timeSeriesData.map((data) => data.dailyrecovered),
            label: 'Recovered',
            borderColor: 'green',
            fill: false,
          },
        ],
      }}
      options={{
        plugins: {
          zoom: {
            pan: {
              enabled: true,
              mode: 'xy',
            },
            zoom: {
              enabled: true,
              mode: 'xy',
            },
          },
        },
      }}
    />
  );
  const lineChartDeath = (
    <Line
      data={{
        labels: timeSeriesData.map(({ date }) => changeFormat(date)),
        datasets: [
          {
            data: timeSeriesData.map((data) => data.dailydeceased),
            label: 'Deaths',
            borderColor: 'red',
            fill: false,
          },
        ],
      }}
    />
  );

  return (
    <>
      <h2 className='text-center font-bold text-3xl  '>
        Rise of Cases in India
      </h2>
      <div className='grid md:grid-cols-2 gap-4'>
        <div>{lineChart}</div>
        <div>{lineChartDeath}</div>
      </div>
    </>
  );
};

export default Chart;
