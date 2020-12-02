import React from 'react';
const Cardtype = (props) => {

    const showValueInGraph = (heading, amount) => {
        props.showValueInGraph(heading, amount);
    }

    return (
        <div className="dashGraph" onClick={() => showValueInGraph(props.heading, props.amount)}>

            <img className="imgWidth" src={props.imgType}  />  <br />

            <div> {props.heading} </div>

            <div> &#x20b9; {props.amount} </div>

            <div className="line1">

                <div className="line" style={{ backgroundColor: props.color }}></div>

                <div className="percent"> {props.percentage}% </div>

            </div>
        </div>
    )
}

export default Cardtype;