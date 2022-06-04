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
				className='container grid grid-cols-1 gap-8 m-auto md:gap-16 md:grid-cols-2'
			>
				{data.map((menu) => {
					return (
						<button
							className='relative w-full overflow-hidden rounded-3xl aspect-video group'
							onClick={openModal}
						>
							<Title
								className='relative z-10 transition-all md:mb-8 md:ml-8 group-hover:opacity-0 md:absolute md:bottom-0 md:text-left'
								tag='h3'
								type='menu'
							>
								{menu.title}
							</Title>
							<img
								src={menu.img}
								alt={menu.title}
								className='w-full h-full transition-all opacity-60 absolute-center group-hover:opacity-100'
							/>
						</button>
					);
				})}
			</section>
		</>
	);
}
