import React, { useState } from "react"
import { Dropdown } from 'semantic-ui-react'
import Home from "../home/Home.page";
import "./Search.style.css";

export default function Search(props) {	
	const [locationToSearch, setLocationToSearch] = useState([]);
	const [walkersTodisplay, setWalkersTodisplay] = useState(null);

	function displayLocationOptions () {
		if (!props.data) {
			return [{text: "אזור"}];
		}
		
		const uniqeLocations = [];
		const locationSelectOptions = [];
		props.data.forEach((walker) => {
			if (!uniqeLocations.includes(walker.location) && walker.location !== "") {
				uniqeLocations.push(walker.location);
				locationSelectOptions.push({
					key: walker.id,
					value: walker.location,
					text: walker.location,
				})
			}
		})

		return locationSelectOptions;
	}

	function filterSubmitHandler() {
		const filteredWalkers	=	props.data.filter((walker) => {
				return locationToSearch.includes(walker.location);
		})
		setWalkersTodisplay(filteredWalkers);
	}
	
	return (
		<div className="Search-wrapper">
			<div className="Search-filter-sort-wrapper Search-flex">
				<div className="Search-filter Search-flex">
					<div className="Search-filter-title">
						חיפוש לפי:
					</div>
					<label htmlFor={"location"} className="Search-flex Search-dropdown-label">
						אזור		
						<Dropdown
							name="location"
							className="Search-filter-location Search-flex"	
							placeholder="אזור"
							fluid
							multiple
							selection
							options={displayLocationOptions()}
							onChange={(event, data) => setLocationToSearch(data.value)}
						/>
					</label>
					<button
						className="Login-login-btn Search-filter-btn"
						onClick={filterSubmitHandler}
						value="filter"
					>
						חיפוש
					</button>
				</div>
			</div>
			<div className="Search-cards-wrapper">
				{walkersTodisplay && <Home 
					data={walkersTodisplay} 
					userDidChanged={props.userDidChanged} 
				/>}		
			</div>
		</div>
	)
}