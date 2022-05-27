import './App.css';
import './assets/css/index.css';
import Banner from './components/modules/Banner';
import bgBanner from './assets/banner_full.jpg';
import logoTitle from './assets/logoTitle.svg';
import Margin from './components/utils/Margin';
import Schedule from './components/modules/Schedule';
import Location from './components/modules/Location';
import Gallery from './components/modules/Gallery';


function App() {
	return (
		<>
			<Banner
				img={bgBanner}
				title='Un lugar agradable y acogedor para tus reuniones'
				subtitle='Donde puedes disfrutar cafe, frappé, smoothie, pizza, crepa y pasta.'
				logo={logoTitle}
			></Banner>
<<<<<<< HEAD
            <Margin size="l"/>
=======
			<Schedule></Schedule>
			<Location></Location>
			<Gallery></Gallery>
>>>>>>> 0ab35057fdd31fd2449d89e3523ca620d8a8d475
		</>
	);
}

export default App;