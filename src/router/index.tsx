import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { HomePage } from '../pages/HomePage';
import { WizPage } from '../pages/WizPage';
import { ProfilePage } from '../pages/ProfilePage';
import { EducationPage } from '../pages/EducationPage';
import { EducationPagePath, HomePagePath, ProfilePagePath, WizPagePath } from '../constants/RoutesPaths';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: HomePagePath, element: <HomePage /> },
			{ path: WizPagePath, element: <WizPage /> },
			{ path: EducationPagePath, element: <EducationPage /> },
			{ path: ProfilePagePath, element: <ProfilePage /> },
		],
	},
]);

export default router;
