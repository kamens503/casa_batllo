import Title from '../utils/Title';

export default function Menu(props) {
	const { menus } = props;
	return (
		<>
			<section
				id='menu'
				className='grid grid-cols-1 gap-8 md:gap-16 md:grid-cols-2'
			>
				{menus.map((menu) => {
					return (
						<a className='w-full rounded-lg aspect-video'>
							<Title>{menu.title}</Title>
							<img src={menu.img} alt={menu.title} className="absolute opacity-5 center"/>
						</a>
					);
				})}
			</section>
		</>
	);
}
