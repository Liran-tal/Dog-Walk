import  "./Logo.css"
import { FaPaw } from "react-icons/fa";


export default function Logo() {
	return (
		<div className="Logo-container">
			<div className="Logo-paw-wrapper">
				<div className="Logo-paw-1">
					<FaPaw />
				</div>
				<div className="Logo-paw-2">
					<FaPaw />
				</div>
				<div className="Logo-paw-3">
					<FaPaw />
				</div>
			</div>
			<div className="Logo-text">
				<h1>
					DOG WALK
				</h1>
			</div>
		</div>
	)
}