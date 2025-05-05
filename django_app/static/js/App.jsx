import React from 'react';

const styles = {
	container: {
		maxWidth: '800px',
		margin: '0 auto',
		padding: '2rem',
		fontFamily: 'system-ui, -apple-system, sans-serif',
	},
	heading: {
		color: '#2d3748',
		fontSize: '2.5rem',
		marginBottom: '1.5rem',
	},
	paragraph: {
		color: '#4a5568',
		fontSize: '1.125rem',
		lineHeight: '1.75',
	},
};

function App() {
	return (
		<div style={styles.container}>
			<h1 style={styles.heading}>Welcome to Django + React</h1>
			<p style={styles.paragraph}>
				This is a simple example of React running in Django with a build
				step.
			</p>
		</div>
	);
}

export default App;
