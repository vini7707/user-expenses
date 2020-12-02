import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

const Chart = ({ Shopping, Food, Travel, Fuel, EMI, Others }) => {

    const data = {
        chartData: {
            labels: ['Shopping', 'Food', 'Travel', 'Fuel', 'EMI', 'Others'],
            datasets: [{
                    label: 'User Expenses Yearly',
                    data: [Shopping, Food, Travel, Fuel, EMI, Others],
                    borderWidth: 4, // set diameter of dots here
                    borderColor: 'gray',
                    fill: false,
                    pointRadius: 6,
                    borderDash: [0, 8], // set 'length' of dash/dots to zero and
                                        // space between dots (center to center)
                                        // recommendation: 2x the borderWidth
                    borderCapStyle: 'round', // this is where the magic happens
                }]
        }
    }
    return (
        <div className="chart">
            <Line data={data.chartData} options={{ maintainAspectRatio: false }} />
        </div>
    )
}
export default Chart;

// backgroundColor:[ 
//'rgba(100,90,120,0.6)',
// 'rgba(54,162,235,0.6)',
// 'rgba(255,206,86,0.6)',
// 'rgba(75,190,190,0.6)',
// 'rgba(153,102,255,0.6)',
// 'rgba(255,159,64,0.6)'
                // ]
