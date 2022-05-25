import './App.css';
import './assets/css/index.css';
import Banner from './components/modules/Banner';
import Content from './components/utils/Content';
import Title from './components/utils/Title';
import banner from './assets/banner_full.jpg'
function App() {
	return (
		<Banner img={banner}>
			<Title type="banner">Un lugar agradable y acogedor para tus reuniones</Title>
			<Content>
				Donde puedes disfrutar cafe, frappé, smoothie, pizza, crepa y pasta.
			</Content>
		</Banner>
	);
}

export default App;
