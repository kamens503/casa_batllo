
import logo from '../../assets/iso_white.svg'

import instaIcon from '../../assets/instagram.svg'
import faceIcon from '../../assets/face.svg'
import tikIcon from '../../assets/tiktok.svg'
import Link from '../utils/Link'



export default function Header(props) {
	const links = [
		{title:'Menú', link: '#menu'},
		{title:'Galería', link: '#gallery'},
		{title:'Ubicación', link: '#location'},
		{title:'Horario', link: '#hours'}
	]
	
	const socialLinks = [
		{icon: instaIcon,link:'www.instagram.com'},
		{icon: faceIcon, link:'www.facebook.com'},
		{icon: tikIcon, link:'www.tiktok.com'}
	]
    const coverAll = 'absolute top-0 left-0 w-full h-full';
	return (
		<>
			<header className='absolute top-0 z-20 items-center w-full px-8'>
				<nav className='relative z-20 flex justify-between py-7'>
					<span className='flex'>
						<img src={logo} alt="Casa Batlló" className='w-14'/>
						<div className='ml-9'>
							{ links.map(e=>{
								return (<>
								<Link href={e.link} className="mx-3">{e.title}</Link>
								</>)
							}) }
						</div>
					</span>
					<div className='flex justify-self-end'>
						{ socialLinks.map(e => {
							return(<>
							<Link href={e.link} className='w-8 h-8 mx-2'>
								<img src={e.icon} alt='' className='w-full'/>
							</Link>
							</>)
						})}
					</div>
				</nav>
				<div
					id='backdrop'
					className={coverAll + ' z-10 bg-gradient-to-b from-black opacity-50'}
				/>
			</header>
		</>
	);
}
