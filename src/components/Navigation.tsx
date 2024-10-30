
import { NavLink } from 'react-router-dom';
import { EducationPagePath, HomePagePath, ProfilePagePath, WizPagePath } from '../constants/RoutesPaths';

export const Navigation = () => {
	return (
		<div className='flex items-center justify-center gap-10 bg-gray-200 rounded-full fixed bottom-10 left-0 right-0 h-16'>
			<NavLink
				to={HomePagePath}
				className={({ isActive }) =>
					isActive ? 'text-black font-medium' : 'text-gray-500'
				}
			>
				<div className='flex flex-col items-center'>
					<img src='assets/Home.png' alt='home' />
					<span>Главная</span>
				</div>
			</NavLink>
			<NavLink
				to={WizPagePath}
				className={({ isActive }) =>
					isActive ? 'text-black font-medium' : 'text-gray-500'
				}
			>
				<div className='flex flex-col items-center'>
					<img src='assets/Lightning.png' alt='wiz' />
					<span>Wiz</span>
				</div>
			</NavLink>
			<NavLink
				to={EducationPagePath}
				className={({ isActive }) =>
					isActive ? 'text-black font-medium' : 'text-gray-500'
				}
			>
				<div className='flex flex-col items-center'>
					<img src='assets/AcademicCap.png' alt='ed' />
					<span>ED</span>
				</div>
			</NavLink>
			<NavLink
				to={ProfilePagePath}
				className={({ isActive }) =>
					isActive ? 'text-black font-medium' : 'text-gray-500'
				}
			>
				<div className='flex flex-col items-center'>
					<img src='assets/User.png' alt='profile' />
					<span>Профиль</span>
				</div>
			</NavLink>
		</div>
	);
};
