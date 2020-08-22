import React from "react";


export const SearchQuery = (props) =>{
    return (
        props.searchQuery.term !== '' && (
            <div className={'SearchQuery'}>
                {!!props.resultsReturned ? <div> {`Here's what we found for ${props.searchQuery.term} in ${props.searchQuery.location}`}</div>
                    :<div>{'looking for restaurants...'}</div>
                }
            </div>
        )
    )
}