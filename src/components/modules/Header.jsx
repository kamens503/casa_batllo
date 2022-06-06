import logo from '../../assets/iso_white.svg';

import instaIcon from '../../assets/instagram.svg';
import faceIcon from '../../assets/face.svg';
import tikIcon from '../../assets/tiktok.svg';
import Link from '../utils/Link';
import HamburguerBtn from '../utils/HamburguerBtn';
import { useState } from 'react';

function LargeMenu(props) {
	const { links } = props;
	return (
		<div className='hidden ml-10 lg:flex item'>
			{links.map((e) => {
				return (
					<>
						<Link href={e.link} className='mx-4'>
							{e.title}
						</Link>
					</>
				);
			})}
		</div>
	);
}

function MobileMenu(props) {
	const { links, isOpen } = props;
	const state = isOpen ? 'flex' : 'hidden';
	return (
		<div
			id='menu-wrapper'
			className={`${state} lg:hidden fixed top-0 left-0 z-[50] bg-black/80`}
		>
			<nav className=' mx-[3rem] w-screen h-screen justify-center flex flex-col' id='mobile-menu'>
				{links.map((e, i) => {
					return (
						<Link href={e.link} className='block my-5' key={i}>
							{e.title}
						</Link>
					);
				})}
			</nav>
		</div>
	);
}

export default function Header(props) {
	const [isOpen, setIsOpen] = useState(false);
	const links = [
		{ title: 'Menú', link: '#menu' },
		{ title: 'Galería', link: '#gallery' },
		{ title: 'Ubicación', link: '#location' },
		{ title: 'Horario', link: '#hours' },
	];

	const socialLinks = [
		{ icon: instaIcon, link: 'www.instagram.com' },
		{ icon: faceIcon, link: 'www.facebook.com' },
		{ icon: tikIcon, link: 'www.tiktok.com' },
	];
	const coverAll = 'absolute top-0 left-0 w-full h-full';
	function swithMobileMenu() {
		setIsOpen(!isOpen);
		console.log('Open / Close Mobile menu', isOpen);
	}
	return (
		<>
			<header className='absolute top-0 z-[100] items-center w-full px-8'>
				<nav className='relative z-50 flex justify-between py-7'>
					<span className='flex'>
						<HamburguerBtn onClick={swithMobileMenu} />
						<img src={logo} alt='Casa Batlló' className='w-14' />
						<LargeMenu links={links} />
					</span>
					<div className='flex items-center justify-self-end'>
						{socialLinks.map((e) => {
							return (
								<>
									<Link href={e.link} className='w-8 h-8 mx-2'>
										<img src={e.icon} alt='' className='w-full' />
									</Link>
								</>
							);
						})}
					</div>
				</nav>
				<div
					id='backdrop'
					className={coverAll + ' z-10 bg-gradient-to-b from-black opacity-50'}
				/>
				<MobileMenu links={links} isOpen={isOpen} />
			</header>
		</>
	);
}
