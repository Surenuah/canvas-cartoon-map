
import { NavLink } from 'react-router-dom';
import { Images } from '../constants/ImagesPaths';
import { Routes } from '../constants/RoutesPaths';

export const Navigation = () => {
	return (
		<div className='flex items-center justify-center gap-10 bg-gray-200 rounded-full fixed bottom-10 left-0 right-0 h-16'>
			<NavLink
				to={Routes.HOME}
				className={({ isActive }) =>
					isActive ? 'text-black font-medium' : 'text-gray-500'
				}
			>
				<div className='flex flex-col items-center'>
					<img src={Images.HOME} alt='home' />
					<span>Главная</span>
				</div>
			</NavLink>
			<NavLink
				to={Routes.WIZ}
				className={({ isActive }) =>
					isActive ? 'text-black font-medium' : 'text-gray-500'
				}
			>
				<div className='flex flex-col items-center'>
					<img src={Images.WIZ} alt='wiz' />
					<span>Wiz</span>
				</div>
			</NavLink>
			<NavLink
				to={Routes.EDUCATION}
				className={({ isActive }) =>
					isActive ? 'text-black font-medium' : 'text-gray-500'
				}
			>
				<div className='flex flex-col items-center'>
					<img src={Images.EDUCATION} alt='ed' />
					<span>ED</span>
				</div>
			</NavLink>
			<NavLink
				to={Routes.PROFILE}
				className={({ isActive }) =>
					isActive ? 'text-black font-medium' : 'text-gray-500'
				}
			>
				<div className='flex flex-col items-center'>
					<img src={Images.PROFILE} alt='profile' />
					<span>Профиль</span>
				</div>
			</NavLink>
		</div>
	);
};
