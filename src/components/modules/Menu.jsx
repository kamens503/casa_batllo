import Title from '../utils/Title';

export default function Menu(props) {
	function openModal() {
		console.log('Abrir modal');
	}
	const { data } = props;
	return (
		<>
			<section
				id='menu'
				className='grid grid-cols-1 gap-8 md:gap-16 md:grid-cols-2'
			>
				{data.map((menu) => {
					return (
						<button className='relative w-full rounded-lg aspect-video group' onClick={openModal}>
							<Title className='transition-all md:mb-8 md:ml-8 group-hover:opacity-0' tag="h3" type="menu">
								{menu.title}
							</Title>
							<img
								src={menu.img}
								alt={menu.title}
								className='w-full h-full transition-all absolute-center opacity-5 group-hover:opacity-100'
							/>
						</button>
					);
				})}
			</section>
		</>
	);
}
