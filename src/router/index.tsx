import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { HomePage } from '../pages/HomePage';
import { WizPage } from '../pages/WizPage';
import { ProfilePage } from '../pages/ProfilePage';
import { EducationPage } from '../pages/EducationPage';
import { Routes } from '../constants/RoutesPaths';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: Routes.HOME, element: <HomePage /> },
			{ path: Routes.WIZ, element: <WizPage /> },
			{ path: Routes.EDUCATION, element: <EducationPage /> },
			{ path: Routes.PROFILE, element: <ProfilePage /> },
		],
	},
]);

export default router;
