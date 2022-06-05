import './App.css';
import './assets/css/index.css';
import Banner from './components/modules/Banner';
import bgBanner from './assets/banner_full.jpg';
import logoTitle from './assets/logoTitle.svg';

import Schedule from './components/modules/Schedule';
import Location from './components/modules/Location';
import Gallery from './components/modules/Gallery';
import Footer from './components/modules/Footer';
import Menu from './components/modules/Menu';
import menuData from './menuData';
import Margin from './components/utils/Margin';


function App() {
	return (
		<>
			<Banner
				img={bgBanner}
				title='Un lugar agradable y acogedor para tus reuniones'
				subtitle='Donde puedes disfrutar cafe, frappé, smoothie, pizza, crepa y pasta.'
				logo={logoTitle}
			></Banner>
			<Margin size='l' />
			<Menu data={menuData} />
			<Margin size='l' />
			<div className=' md:flex flex-row justify-evenly '>
			<Schedule />
			<Margin size='l' />
			<Location />
			</div>
			<Margin size='l' />
			<Gallery />
			<Margin size='l' />
			<Footer logo={logoTitle} />
			
		</>
	);
}

export default App;
