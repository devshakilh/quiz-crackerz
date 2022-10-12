import React, { useState } from 'react';

import ReactApexChart from 'react-apexcharts';
const Statics = () => {
    const [state, setState] = useState({
        series: [{
            name: "Quiz",
            data: [8, 9, 8, 11,]
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: ' Trends by Quiz',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'],
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['React', 'Javascript', 'Css', 'Git'],
            }
        },
    });







    return (
        <div>

            <h1 className='text-4xl text-center font-semibold'>React ApexChart</h1>
            <br />
            <ReactApexChart options={state.options} series={state.series} type="line" height={350} />
        </div>
    );
};

export default Statics;
