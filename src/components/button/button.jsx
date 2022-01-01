import React from "react";


export default function Button({text, value, style, onClick, id}) {
	return (
		<button 
			id={id}
			className={"ui button " + style}
			onClick={onClick}
			value={value}
		>
			{text}
		</button>			
	)
}