import { Link } from "react-router-dom";

export default function PageNotFound(props) {
	return (
		<h1>
			Status {props.status}: {props.statusText}
		</h1>
	)
}