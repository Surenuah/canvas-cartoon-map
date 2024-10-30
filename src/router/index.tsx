import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { HomePage } from '../pages/HomePage';
import { WizPage } from '../pages/WizPage';
import { ProfilePage } from '../pages/ProfilePage';
import { EducationPage } from '../pages/EducationPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: '/home', element: <HomePage /> },
			{ path: 'wiz', element: <WizPage /> },
			{ path: 'ed', element: <EducationPage /> },
			{ path: 'profile', element: <ProfilePage /> },
		],
	},
]);

export default router;
