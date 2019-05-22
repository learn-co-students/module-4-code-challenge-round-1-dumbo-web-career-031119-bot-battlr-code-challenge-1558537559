import React from 'react';
import {Search} from 'semantic-ui-react'


const SearchBar = props => {


	return(
		<div>
			<Search onSearchChange={props.updateSearch} className="mySearch" />
		</div>
	)




}

export default SearchBar