import { Link } from 'react-router-dom';

export const Navigation = () => {
	return (
		<div className='flex items-center justify-center gap-10 bg-gray-200 rounded-full fixed bottom-10 left-0 right-0 h-16'>
			<Link to='/home'>
				<div className='flex flex-col items-center'>
					<img src='assets/Home.png' alt='home' />
					<span>Главная</span>
				</div>
			</Link>
			<Link to='/wiz'>
				<div className='flex flex-col items-center'>
					<img src='assets/Lightning.png' alt='home' />
					<span>Wiz</span>
				</div>
			</Link>
			<Link to='/ed'>
				<div className='flex flex-col items-center'>
					<img src='assets/AcademicCap.png' alt='home' />
					<span>ED</span>
				</div>
			</Link>
			<Link to='/profile'>
				<div className='flex flex-col items-center'>
					<img src='assets/User.png' alt='home' />
					<span>Профиль</span>
				</div>
			</Link>
		</div>
	);
};
