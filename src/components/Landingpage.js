import React, {useState, useEffect} from 'react';
import Selectedtime from './Selectedtime';
import Expensetype from './Expensetype'
import { useSelector } from 'react-redux';

function Landingpage() {

  const [total, setTotal] = useState(0);
  const [shoppingAmount, setShoppingAmount] = useState(0);
  const [foodAmount, setFoodAmount] = useState(0);
  const [travelAmount, setTravelAmount] = useState(0);
  const [fuelAmount, setFuelAmount] = useState(0);
  const [emiAmount, setEmiAmount] = useState(0);
  const [othersAmount, setOthersAmount] = useState(0);

  const [shoppingAmountGraph, setShoppingAmountGraph] = useState(0);
  const [foodAmountGraph, setFoodAmountGraph] = useState(0);
  const [travelAmountGraph, setTravelAmountGraph] = useState(0);
  const [fuelAmountGraph, setFuelAmountGraph] = useState(0);
  const [emiAmountGraph, setEmiAmountGraph] = useState(0);
  const [othersAmountGraph, setOthersAmountGraph] = useState(0);
  
  // To  Manage the State in the Component :-
  let {data} =  useSelector( state => state.User );

  useEffect( () => {
    
    let Total = 0; let Shopping = 0; let Food = 0; let Travel = 0; let Fuel = 0; let EMI = 0; let Others = 0;
    data.filter( (val) => {
      
      Total += val.Total;
      Shopping += val.Expenses.Shopping;
      Food += val.Expenses.Food
      Travel += val.Expenses.Travel
      Fuel += val.Expenses.Fuel
      EMI += val.Expenses.EMI
      Others += val.Expenses.Others

    });
    setTotal(Total); setShoppingAmount(Shopping); setFoodAmount(Food); setTravelAmount(Travel); setFuelAmount(Fuel); 
    setEmiAmount(EMI); setOthersAmount(Others);

    setShoppingAmountGraph(Shopping); setFoodAmountGraph(Food); setTravelAmountGraph(Travel); setFuelAmountGraph(Fuel); 
    setEmiAmountGraph(EMI); setOthersAmountGraph(Others);

  }, []);

  const showValueInGraph = (heading, amount) => {

    if(heading === "Food"){

      setShoppingAmountGraph(0); setFoodAmountGraph(foodAmount); setTravelAmountGraph(0); setFuelAmountGraph(0); setEmiAmountGraph(0);
      setOthersAmountGraph(0);
      
    }else if(heading === "Shopping"){

      setShoppingAmountGraph(shoppingAmount); setFoodAmountGraph(0); setTravelAmountGraph(0); setFuelAmountGraph(0); setEmiAmountGraph(0);
      setOthersAmountGraph(0);

    }else if(heading === "Travel"){

      setShoppingAmountGraph(0); setFoodAmountGraph(0); setTravelAmountGraph(travelAmount); setFuelAmountGraph(0); setEmiAmountGraph(0);
      setOthersAmountGraph(0);

    }else if(heading === "Fuel"){
      
      setShoppingAmountGraph(0); setFoodAmountGraph(0); setTravelAmountGraph(0); setFuelAmountGraph(fuelAmount); setEmiAmountGraph(0);
      setOthersAmountGraph(0);
      
    }else if(heading === "EMI"){

      setShoppingAmountGraph(0); setFoodAmountGraph(0); setTravelAmountGraph(0); setFuelAmountGraph(0); setEmiAmountGraph(emiAmount);
      setOthersAmountGraph(0);

    }else if(heading === "Others"){

      setShoppingAmountGraph(0); setFoodAmountGraph(0); setTravelAmountGraph(0); setFuelAmountGraph(0); setEmiAmountGraph(0);
      setOthersAmountGraph(othersAmount);
    }
  }
  return (
    <div className="App">
        <Selectedtime Shopping = {shoppingAmountGraph} 
                      Food = {foodAmountGraph} 
                      Travel = {travelAmountGraph} 
                      Fuel = {fuelAmountGraph} 
                      EMI = {emiAmountGraph} 
                      Others = {othersAmountGraph}  />

        <div className = "amount">
            <div>Total Spend</div>
            <div>&#x20b9;{total}</div>
        </div>
        
        <Expensetype  showValueInGraph = {showValueInGraph}  
                      Total = {total} 
                      Shopping = {shoppingAmount} 
                      Food = {foodAmount} 
                      Travel = {travelAmount} 
                      Fuel = {fuelAmount} 
                      EMI = {emiAmount} 
                      Others = {othersAmount} />     
    </div>
  );
}
export default Landingpage;
