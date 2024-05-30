import React from 'react';
import '../../app/globals.css';

export function Container({ children }: { children: React.ReactNode }) {
	return <div className='container'>{children}</div>;
}