import React, { useState } from "react"
import Home from "../home/Home.page";
import "./Search.style.css";



export default function Search(props) {
	
	const [locationToSearch, setLocationToSearch] = useState("");
	const [filteredData, setfilteredData] = useState([]);

	function displayLocationOptions () {
		const uniqeLocations = [];
		props.data.forEach((walker) => {
			if (!uniqeLocations.includes(walker.location)) {
				uniqeLocations.push(walker.location);
			}
		})

		return (
			uniqeLocations.map((location) => {
				return <option value={location}>{location}</option>
			})
		)
	}

	return (
		<div className="Search-wrapper Search-flex">
			<div className="Search-filter-sort-wrapper Search-flex">
				<div className="Search-filter">
					<div className="Search-filter-header">
						חיפוש לפי:
					</div>
					{/* <label > */}
						<select multiple="" className="ui fluid search dropdown">
							<option selected >אזור</option>
							{props.data && displayLocationOptions()}
						</select>
					{/* </label> */}
					
				</div>
			</div>
			<Home 
				data={filteredData} 
				userDidChanged={props.userDidChanged} 
			/>
		</div>
	)
}