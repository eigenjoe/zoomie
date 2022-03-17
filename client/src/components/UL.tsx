import React from "react";

type Props = { children: React.ReactNode };

export const UL = ({ children }: Props) => {
	return (
		<ul>
			{React.Children.map(children, (item) => (
				<li>{item}</li>
			))}
		</ul>
	);
};
