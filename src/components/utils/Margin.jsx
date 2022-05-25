export default function Margin(props) {
	const { size } = props;
	const sizes = {
		section: 'md:h-[200px] h-[80px]',
		title: 'md:h-[90px] h-[30px]',
		s: 'md:h-[65px] h-[30px]',
		xs: '',
	};

	return (
		<>
			<hr className={sizes[size] || size} />
		</>
	);
}
