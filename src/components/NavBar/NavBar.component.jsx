import { Link } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai"
import { AiFillStar } from "react-icons/ai"
import { FaPaw } from "react-icons/fa"
export default function NavBar() {
	return (
		<div >
			<Link to="/" >
				<div>
					<AiTwotoneHome />
					<div>
						בית
					</div>
				</div>
			</Link>
			<Link to="/login" >
				<div >
					התחבר
				</div>
			</Link>
			<Link to="/favorites" >
				<div>
					<AiFillStar />
					<div>
						מועדפים
					</div>
				</div>
			</Link>
		</div>
	)
}