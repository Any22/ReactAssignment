// https://www.yelp.com/developers/documentation/v3/business_search
import React from 'react'
import './SearchBar.css'
const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
}

const SearchBar = () => {

 const renderSortByOptions= () => {
        
        return Object.keys(sortByOptions).map(sortByOption => {
          let sortByOptionValue = sortByOptions[sortByOption];
        //    return<li key={}></li>;
        }

        )}
   
return<div className="SearchBar">
    <div className="SearchBar-sort-options">
        <ul>
        renderSortByOptions();
        </ul>
    </div>
    <div className="SearchBar-fields">
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
    </div>
    <div className="SearchBar-submit">
        <a>Let's Go</a>
    </div>
    </div>
   
} 

export default SearchBar;