import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
	return (
		<div style={styles.container}>
			{/* Navigation */}
			<nav style={styles.nav}>
				<div style={styles.logo}>YourBrand</div>
				<div style={styles.navLinks}>
					<a href='#features' style={styles.navLink}>
						Features
					</a>
					<a href='#pricing' style={styles.navLink}>
						Pricing
					</a>
					<a href='#contact' style={styles.navLink}>
						Contact
					</a>
					<button style={styles.button}>Get Started</button>
				</div>
			</nav>

			{/* Hero Section */}
			<section style={styles.hero}>
				<div style={styles.heroContent}>
					<h1 style={styles.heroTitle}>
						Transform Your Business with AI-Powered Solutions
					</h1>
					<p style={styles.heroSubtitle}>
						Streamline operations, boost productivity, and drive
						growth with our innovative platform.
					</p>
					<div style={styles.ctaContainer}>
						<button style={styles.primaryButton}>
							Start Free Trial
						</button>
						<button style={styles.secondaryButton}>
							Schedule Demo
						</button>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section style={styles.features}>
				<h2 style={styles.sectionTitle}>Why Choose Us</h2>
				<div style={styles.featureGrid}>
					<div style={styles.featureCard}>
						<h3 style={styles.featureTitle}>Automated Workflows</h3>
						<p style={styles.featureText}>
							Save time with intelligent automation
						</p>
					</div>
					<div style={styles.featureCard}>
						<h3 style={styles.featureTitle}>Real-time Analytics</h3>
						<p style={styles.featureText}>
							Make data-driven decisions instantly
						</p>
					</div>
					<div style={styles.featureCard}>
						<h3 style={styles.featureTitle}>Secure Platform</h3>
						<p style={styles.featureText}>
							Enterprise-grade security for your data
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}

const styles = {
	container: {
		fontFamily: 'system-ui, -apple-system, sans-serif',
		color: '#333',
	},
	nav: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '1.5rem 2rem',
		backgroundColor: 'white',
		boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
	},
	logo: {
		fontSize: '1.5rem',
		fontWeight: 'bold',
		color: '#2563eb',
	},
	navLinks: {
		display: 'flex',
		gap: '2rem',
		alignItems: 'center',
	},
	navLink: {
		textDecoration: 'none',
		color: '#4b5563',
		fontWeight: '500',
	},
	button: {
		padding: '0.5rem 1rem',
		backgroundColor: '#2563eb',
		color: 'white',
		border: 'none',
		borderRadius: '0.375rem',
		cursor: 'pointer',
	},
	hero: {
		padding: '4rem 2rem',
		backgroundColor: '#f8fafc',
		textAlign: 'center',
	},
	heroContent: {
		maxWidth: '800px',
		margin: '0 auto',
	},
	heroTitle: {
		fontSize: '3rem',
		fontWeight: 'bold',
		color: '#1e293b',
		marginBottom: '1.5rem',
	},
	heroSubtitle: {
		fontSize: '1.25rem',
		color: '#64748b',
		marginBottom: '2rem',
	},
	ctaContainer: {
		display: 'flex',
		gap: '1rem',
		justifyContent: 'center',
	},
	primaryButton: {
		padding: '0.75rem 1.5rem',
		backgroundColor: '#2563eb',
		color: 'white',
		border: 'none',
		borderRadius: '0.375rem',
		fontSize: '1rem',
		fontWeight: '500',
		cursor: 'pointer',
	},
	secondaryButton: {
		padding: '0.75rem 1.5rem',
		backgroundColor: 'white',
		color: '#2563eb',
		border: '1px solid #2563eb',
		borderRadius: '0.375rem',
		fontSize: '1rem',
		fontWeight: '500',
		cursor: 'pointer',
	},
	features: {
		padding: '4rem 2rem',
		backgroundColor: 'white',
	},
	sectionTitle: {
		textAlign: 'center',
		fontSize: '2rem',
		fontWeight: 'bold',
		color: '#1e293b',
		marginBottom: '3rem',
	},
	featureGrid: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
		gap: '2rem',
		maxWidth: '1200px',
		margin: '0 auto',
	},
	featureCard: {
		padding: '2rem',
		backgroundColor: '#f8fafc',
		borderRadius: '0.5rem',
		textAlign: 'center',
	},
	featureTitle: {
		fontSize: '1.25rem',
		fontWeight: 'bold',
		color: '#1e293b',
		marginBottom: '1rem',
	},
	featureText: {
		color: '#64748b',
	},
};

// Create root element if it doesn't exist
const rootElement = document.getElementById('root');
if (rootElement) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(<App />);
}
