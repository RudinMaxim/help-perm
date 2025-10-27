import React from 'react';

interface Props {
	children: React.ReactNode;
	className?: string;
}

export function Container({ children, className = '' }: Props) {
	return (
		<main className={`container ${className}`} role="main">
			{children}
		</main>
	);
}