import Title from '../utils/Title';
import Modal from './MenuModal';
import menuData from '../../menuData';
import { useState } from 'react';

export default function Menu(props) {
	const [isOpen, setIsOpen] = useState(false);
	const [currentMenu, setCurrentMenu] = useState([]);
	function switchModal() {
		setIsOpen(!isOpen);
	}
	function loadCurrentMenu(i) {
		setCurrentMenu(menuData[i]);
	}
	const { data } = props;
	return (
		<>
			<Modal data={currentMenu} isOpen={isOpen} onClick={switchModal} />
			<section
				id='menu'
				className='container grid grid-cols-1 gap-8 m-auto md:gap-16 md:grid-cols-2'
			>
				{data.map((menu, i) => {
					return (
						<button
							className='relative w-full overflow-hidden rounded-3xl aspect-video group'
							onClick={() => {switchModal(); loadCurrentMenu(i)}}
						>
							<Title
								className='relative z-10 transition-all md:mb-8 md:ml-8 group-hover:opacity-0 md:absolute md:bottom-0 md:text-left'
								tag='h3'
								type='menu'
							>
								{menu.title}
							</Title>
							<img
								src={menu.img}
								alt={menu.title}
								className='w-full h-full transition-all opacity-60 absolute-center group-hover:opacity-100'
							/>
						</button>
					);
				})}
			</section>
		</>
	);
}
