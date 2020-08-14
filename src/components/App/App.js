import React, { useState} from 'react';
import './App.css';
import {BusinessList} from '../BusinessList/BusinessList';
import {SearchBar} from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';


export const App = () => {
const [results, setResults]=useState([])

  const searchYelp=( term , location , sortBy )=>{
      Yelp.search(term, location, sortBy).then((businesses) => {setResults(businesses)});
   }

     return( 
         <div className="App">
            <h1>ravenous</h1>
               <SearchBar searchYelp={searchYelp}/>
               <BusinessList businesses={results}/>
         </div>

        );
};

