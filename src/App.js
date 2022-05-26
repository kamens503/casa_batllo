import './App.css';
import './assets/css/index.css';
import Banner from './components/modules/Banner';
<<<<<<< HEAD
import Content from './components/utils/Content';
import Title from './components/utils/Title';
import banner from './assets/banner_full.jpg'
import Schedule from './components/modules/Schedule';
import Location from './components/modules/Location';
=======
import bgBanner from './assets/banner_full.jpg';
import logoTitle from './assets/logoTitle.svg';
import Margin from './components/utils/Margin';
>>>>>>> da06db538ba1d9a68b0f6476b93d5163059c3349

function App() {
	return (
		<>
<<<<<<< HEAD
		<Banner img={banner}>
			<Title type="banner">Un lugar agradable y acogedor para tus reuniones</Title>
			<Content>
				Donde puedes disfrutar cafe, frappé, smoothie, pizza, crepa y pasta.
			</Content>
			
		</Banner>
		<Schedule></Schedule>
		<Location></Location>

		</>
		

	
	

=======
			<Banner
				img={bgBanner}
				title='Un lugar agradable y acogedor para tus reuniones'
				subtitle='Donde puedes disfrutar cafe, frappé, smoothie, pizza, crepa y pasta.'
				logo={logoTitle}
			></Banner>
		</>
>>>>>>> da06db538ba1d9a68b0f6476b93d5163059c3349
	);
	
}

export default App;
