import {DAY, WEEK, MONTH, MONTH3} from '../action/ActionType'

const initialState = {
    data:[
        {
            "Months": "January", 
            "Expenses": { "Shopping": 12727, "Food": 1987, "Travel": 24502,"Fuel": 2310,"EMI": 25754,"Others": 2830},
            "Total": 70110
        },
        {
          "Months": "February",
          "Expenses": {"Shopping": 11938,"Food": 1063,"Travel": 24790,"Fuel": 2408,"EMI": 18624,"Others": 2118},
          "Total": 60941
        },
        {
          "Months": "March",
          "Expenses": {"Shopping": 15891,"Food": 1033,"Travel": 19880,"Fuel": 1540,"EMI": 28613,"Others": 2419},
          "Total": 69376
        },
        {
          "Months": "April",
          "Expenses": {"Shopping": 17326,"Food": 1232,"Travel": 21016,"Fuel": 1973,"EMI": 17938,"Others": 2157},
          "Total": 61642
        },
        {
          "Months": "May",
          "Expenses": {"Shopping": 17464,"Food": 1169,"Travel": 20945,"Fuel": 2318,"EMI": 18706,"Others": 2533},
          "Total": 63135
        },
        {
          "Months": "June",
          "Expenses": {"Shopping": 14304,"Food": 1089,"Travel": 24235,"Fuel": 2046,"EMI": 18088,"Others": 1786},
          "Total": 61548
        },
        {
          "Months": "July",
          "Expenses": {"Shopping": 19541,"Food": 1065,"Travel": 20164,"Fuel": 2490,"EMI": 26397,"Others": 2930},
          "Total": 72587
        },
        {
          "Months": "August",
          "Expenses": {"Shopping": 19462,"Food": 1619,"Travel": 24802,"Fuel": 1736,"EMI": 21335,"Others": 1746},
          "Total": 70700
        },
        {
          "Months": "September",
          "Expenses": {"Shopping": 13797,"Food": 1595,"Travel": 19160,"Fuel": 2173,"EMI": 19284,"Others": 2258},
          "Total": 58267
        },
        {
          "Months": "October",
          "Expenses": {"Shopping": 14657,"Food": 1541,"Travel": 21668,"Fuel": 2344,"EMI": 19585,"Others": 2306},
          "Total": 62101
        },
        {
          "Months": "November",
          "Expenses": {"Shopping": 11251,"Food": 1321,"Travel": 19182,"Fuel": 2398,"EMI": 18012,"Others": 1949},
          "Total": 54113
        },
        {
          "Months": "December",
          "Expenses": {"Shopping": 17667,"Food": 1755,"Travel": 18507,"Fuel": 1837,"EMI": 16498,"Others": 2456},
          "Total": 58720
        }
    ],
    payload : {},
    error: false   
}
const UserReducers = (state = initialState, action) => {
    switch (action.type){
        
        case DAY:
            return{

            }
        case WEEK:
            return{

            }    
        case MONTH:
            return{

            }
        case MONTH3:
            return{

            }   
        default :
			return state;    
    }
}
export default UserReducers ;