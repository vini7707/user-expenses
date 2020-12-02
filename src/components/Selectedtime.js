import React from 'react';
import Button from './commoncomponent/Button'
import Chart from './Chart'

const Selectedtime = ({Shopping, Food, Travel, Fuel, EMI, Others}) => {

    return (
        <>
            <div className="btn-btn">

                <Button name = "Day" />
                <Button name = "Week" />
                <Button name = "Month" />
                <Button name = "3 Months" />

                <Chart Shopping = {Shopping} 
                       Food     = {Food} 
                       Travel   = {Travel} 
                       Fuel     = {Fuel} 
                       EMI      = {EMI} 
                       Others   = {Others} />
            </div>
        </>
    )
}
export default Selectedtime ;