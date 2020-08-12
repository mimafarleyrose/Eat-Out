import React, {useState} from 'react';
import './SearchBar.css';


export const SearchBar = (props) =>{
const [searchCuisine, setSearchCusine]=useState('');
const [searchLocation, setSearchLocation]=useState('');
const [currentSortByValue, setCurrentSortByValue]=useState('best_match');

  const sortByOptions = [{
      name:'Best Match',
      id:'best_match'
  }, {name:'Highest Rated',
      id:'rating'
  },{name:'Most Reviewed',
      id: 'review_count'
    }]
    const renderSortByOptions=()=> {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return (
            <li key={sortByOptionValue.id}
                className={currentSortByValue===sortByOptionValue.id?
            'active':''}
                onClick={()=>setCurrentSortByValue(sortByOptionValue.id)}>
                {sortByOption.name}
            </li>
            );
        })
  }

  const handleSearch = (event) => {
      props.searchYelp(searchCuisine, searchLocation, currentSortByValue)
      event.preventDefault();
  }

    return (
        <div className="SearchBar" >
            <div className="SearchBar-sort-options">
                <ul>
                    {renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" onChange={(event)=>setSearchCusine(event.target.value)}/>
                <input placeholder="Where?" onChange={(event)=>setSearchLocation(event.target.value)}/>
            </div>
            <div className="SearchBar-submit">
                <button onClick={(event)=>handleSearch(event)}>Let's Go</button>
            </div>
        </div>
    );
}