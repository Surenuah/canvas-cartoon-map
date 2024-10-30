import './App.css';
import { Outlet } from 'react-router-dom';
import { Navigation } from './components/Navigation';

export const App = () => {
	return (
		<>
			<main>
				<Outlet />
			</main>
			<Navigation />
		</>
	);
};
