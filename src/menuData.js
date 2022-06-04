import antojosImg from './assets/menu/antojos.jpg';
import bebidasImg from './assets/menu/bebidas.jpg';
import crepasImg from './assets/menu/crepas.jpg';
import pastasImg from './assets/menu/pastas.jpg';
import pizzaImg from './assets/menu/pizza.jpg';
import postresImg from './assets/menu/postres.jpg';

const pizza = {
	title: 'Pizza',
	img: pizzaImg,
	content: [
		['Pepperoni'],
		['Vegetariana', 'Tomate, espinaca, champiñones y elotitos'],
		['Tres Quesos', 'Queso mozzarella, parmesano y fetta'],
		['Margherita', 'Tomate y albahaca'],
		['Carnivora', 'Pepperoni, tocino, jamón, salchicha italiana y chorizo'],
		[
			'Italiana',
			'Pepperoni, cebolla, salchicha italiana, pimiento, morron, champiñones y aceitunas negras.',
		],
		[
			'Batlló',
			'Pepperoni, champiñones marinados en vinablanco con tocino y espinaca.',
		],
	],
};
const antojos = {
	title: 'Antojos',
	img: antojosImg,
	content: [
		['Nachos Clásicos', 'Queso y chiles jalapeños'],
		['Nachos Chilli', 'Queso y chilli'],
		['Nachos Batlló', 'Queso, guacamole, crema, salsa bandera y chilli'],
		['Papas Sazonadas', 'Papas en gajos, queso de nachos y chilli'],
		['Palomitas de maiz'],
	],
};
const pasta = {
	title: 'Pasta',
	img: pastasImg,
	content: [
		['Fettuccine Alfredo', 'Salsa cremosa de queso parmesano con pollo.'],
		[
			'Penne San Remo',
			'Salsa cremosa de queso parmesano con pollo y tomate deshidratado.',
		],
		[
			'Penne Manarola',
			'Salsa cremosa de chipotle y chabacano con tocino y pollo.',
		],
	],
};
const postres = {
	title: 'Postres',
	img: postresImg,
	content: [['Affogato'], ['Pastel del día'], ['Iskaffee']],
};
const crepas = {
	title: 'Crepas',
	img: crepasImg,
	content: [
		['Batlló', 'Pollo, salsa alfredo, queso mozzarella y espinaca'],
		[
			'Chabacano Chipotle',
			'Mermelada de chabacano, tocino, salsa cremosa de chipotle, espinaca y queso mozzarella.',
		],
		[
			'Vegetariana',
			'Champiñones, espinaca, elotitos, queso mozzarella en salsa cremosa de parmesano.',
		],
		[
			'Rajas con Crema',
			'Elotitos, chile poblano, crema, espinaca y queso mozzarella',
		],
		[
			'Frutos Rojos',
			'Fresa, cereza, arándano, queso crema con mermelada de zarzamora y frambuesa',
		],
		['Plátano Nutella', 'Plátano, Nutella y queso crema'],
		['Nueces', 'Nuez, almendra, cajeta y queso crema'],
		['Doble Nutella', 'Nutella y más Nutella con queso crema'],
	],
};
const bebidas = {
	title: 'Bebidas',
	img: bebidasImg,
	multiContent: [
		{
			title: 'Cafés',
			content: [
				'Americano',
				'Americano Refill',
				'Espresso',
				'Capuccino',
				'Prensa Francesa',
				'Chocolate con bombones',
			],
		},
		{
			title: 'Lattes',
			content: [
				'Avellana',
				'Vainilla Francesa',
				'Canela',
				'Crema Irlandesa',
				'Amaretto',
				'Caramelo Inglés',
				'Pumpkin Spice',
				'Chai',
				'Chai Vainilla',
				'Chai Negro',
				'Matcha Green Tea',
			],
		},
		{
			title: 'Sodas Italianas',
			content: [
				'Fresa',
				'Cereza',
				'Mango',
				'Piña',
				'Durazno',
				'Kiwi',
				'Fruta de la Pasión',
			],
		},
		{
			title: 'Tés',
			content: [
				'Granada Frambuesa',
				'Arándano Granada',
				'Té Negro Inglés',
				'Mango Fruta de la Pasión',
				'Manzanilla',
				'Naranja y Especias',
				'Verde Premium',
				'Vainilla Canela',
				'Yerbabuena',
				'Menta Marroquí',
				'Jazmín',
				'Earl Grey',
				'Jamaica Frambuesa',
				'Manzana Canela',
			],
		},
		{
			title: 'Frappés',
			content: [
				'Caramelo',
				'Mocha',
				'Oreo',
				'Vainilla',
				'Cajeta',
				'Plátano',
				'Café',
				'Matcha',
				'Chai',
				'Mazapán',
				'Cahi Vainilla',
				'Menta',
				"Reese's",
			],
		},
		{
			title: 'Raspados',
			content: ['Fresa', 'Plátano', 'Mango', 'Piña Colada', 'Durazno'],
		},
		{
			title: 'Otras',
			content: [
				'Té Jazmín',
				'Té de Oolong',
				'Limonada',
				'Limonada Mineral',
				'Limonada Rosa',
				'Limonada Rosa Mineral',
				'Agua Embotellada',
			],
		},
	],
};
const menuData = [pizza, antojos, pasta, postres, crepas, bebidas];
export default menuData;
