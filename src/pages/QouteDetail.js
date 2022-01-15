import React from 'react'
import {useParams,Route} from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQoute from "../components/quotes/HighlightedQuote"

const DUMMY_QOUTES=[
    {id:"q1",author:"Md Nizam",text:"Learning React Router Dom"},
    {id:"q2",author:"Nizam",text:"Learning React REDUX-TOOLKIT"},
    {id:"q3",author:"Nizamuddin",text:"Learning React redux"},


]


const QouteDetail = () => {
    const params=useParams()
    const qoute=DUMMY_QOUTES.find((qoute)=>qoute.id==params.qouteId);

    if(!qoute){
        return <p style={{color:"red"}}>NO QOUTE FOUND</p>
    }

    return (
        <div>
            <h1>Qoutes Detail Page</h1>
            {/* <HighlightedQoute text={"md Nizam"}/> */}
            <HighlightedQoute text={qoute.text} author={qoute.author}/>
            {/* <p>{params.qouteId}</p> */}
            <Route path={`/qoutes/${params.qouteId}/comments`}>
                <Comments></Comments>
            </Route>

            
        </div>
    )
}

export default QouteDetail
