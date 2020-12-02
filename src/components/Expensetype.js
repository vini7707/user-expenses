import React, {useState ,useEffect} from 'react';
import Cardtype from './commoncomponent/Cardtype';
import ShoppingImg from '../assets/shopping.png';
import FoodImg from '../assets/food.jpg';
import FuelImg from '../assets/fuel.png';
import TravelImg from '../assets/plane.jpg';
import EMIImg from '../assets/tag.jpg';
import OthersImg from '../assets/others.png';

const Expensetype = ({ showValueInGraph  ,Total, Shopping, Food, Travel, Fuel, EMI, Others}) => {

    const [shoppingPercent, setShoppingPercent] = useState(0)
    const [foodPercent, setFoodPercent] = useState(0)
    const [travelPercent, setTravelPercent] = useState(0)
    const [fuelPercent, setFuelPercent] = useState(0)
    const [emiPercent, setEmiPercent] = useState(0)
    const [othersPercent, setOthersPercent] = useState(0)

    const getPercentage = (totalAmount, percentAmount, setData) => {
        let amount = percentAmount*100/totalAmount;
        amount = Math.round(amount);
        setData(amount);
    }

    useEffect( () => {

        getPercentage(Total, Shopping, setShoppingPercent);
        getPercentage(Total, Food, setFoodPercent);
        getPercentage(Total, Travel, setTravelPercent);
        getPercentage(Total, Fuel, setFuelPercent);
        getPercentage(Total, EMI, setEmiPercent);
        getPercentage(Total, Others, setOthersPercent);

    });
    
    return (
        <>
            <div className="cardType">
                <Cardtype   showValueInGraph = {showValueInGraph} 
                            imgType = {ShoppingImg}
                            percentage = {shoppingPercent}
                            amount = {Shopping}
                            heading = "Shopping" 
                            color = "red"   />

                <Cardtype   showValueInGraph = {showValueInGraph} imgType = {FoodImg} heading = "Food"  amount = {Food}  color = "yellow" percentage = {foodPercent} />
                <Cardtype   showValueInGraph = {showValueInGraph} imgType = {TravelImg} heading = "Travel" amount = {Travel} color = "white"  percentage = {travelPercent} />
            </div>
            <div className="cardType">
                <Cardtype   showValueInGraph = {showValueInGraph} imgType = {FuelImg} heading = "Fuel" amount = {Fuel}  color = "green"  percentage = {fuelPercent} />
                <Cardtype   showValueInGraph = {showValueInGraph} imgType = {EMIImg} heading = "EMI" amount = {EMI} color = "chocolate"  percentage = {emiPercent} />
                <Cardtype   showValueInGraph = {showValueInGraph} imgType = {OthersImg} heading = "Others" amount = {Others}  color = "blue"  percentage = {othersPercent} />
            </div>
        </>
    )
}

export default Expensetype ;