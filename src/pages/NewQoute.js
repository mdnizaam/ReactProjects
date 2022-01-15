import React from 'react'
import QouteForm from '../components/quotes/QuoteForm'

const NewQoute = () => {
    const addQouteHandler=(qouteData)=>{
        console.log(qouteData)

    }
    return (
        <div>
            <QouteForm onAddQuote={addQouteHandler} />
            
        </div>
    )
}

export default NewQoute
