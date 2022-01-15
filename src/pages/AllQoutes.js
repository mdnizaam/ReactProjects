import React from 'react'
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QOUTES=[
    {id:"q1",author:"Md Nizam",text:"Learning React Router Dom"},
    {id:"q2",author:"Nizam",text:"Learning React REDUX-TOOLKIT"},
    {id:"q3",author:"Nizamuddin",text:"Learning React redux"},


]

const AllQoutes = () => {
    return  <><h1>ALL Qoutes</h1>
     <QuoteList qoutes={DUMMY_QOUTES}/>
    
    </>
    // <QuoteList qoutes={DUMMY_QOUTES}/>
          
}

export default AllQoutes
