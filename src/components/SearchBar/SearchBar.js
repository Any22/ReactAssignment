// https://www.yelp.com/developers/documentation/v3/business_search
import React,{ useState } from 'react';
import './SearchBar.css'

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
}

const SearchBar = () => {
//   const [search,setSearch] = useState({
//   term : '', 
//   location :'', 
//   Sortby: 'best_match'});

// const renderSortByOptions = () => {
//         return <div key={sortByOptions}>
//         sortByOptions.map(sortByOption => 
//            sortByOptionValue = sortByOptions[sortByOption]
//            {/* return<li key={}></li>; */}
        
//         )
//         </div>
// }
   
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