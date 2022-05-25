import './App.css';
import './assets/css/index.css';
import Banner from './components/modules/Banner';
import Content from './components/utils/Content';
import Title from './components/utils/Title';
import banner from './assets/banner_full.jpg';
import logoTitle from './assets/logoTitle.svg';
import Margin from './components/utils/Margin';
import Gallery from './components/modules/Gallery';

function App() {
	return (
		<>
			<Banner img={banner}>
				<img src={logoTitle} alt='logo Casa Batlló' className='w-64 m-auto' />
				<Margin size='xs' />
				<Title type='banner' tag='h1'>
					Un lugar agradable y acogedor para tus reuniones
				</Title>
				<Margin size='xxs' />
				<Content className='max-w-lg m-auto'>
					Donde puedes disfrutar cafe, frappé, smoothie, pizza, crepa y pasta.
				</Content>
			</Banner>
			<Gallery></Gallery>
		</>
	);
}

export default App;
