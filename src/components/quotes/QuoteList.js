import { Fragment } from 'react';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {/* {console.log(props.qoutes) */}
      {
         props.qoutes.map((qoute)=>(
           <QuoteItem 
           key={qoute.id}
           id={qoute.id}
           author={qoute.author}
           text={qoute.text}
           />
         ))}
      </ul>
      
    </Fragment>
  );
};

export default QuoteList;
