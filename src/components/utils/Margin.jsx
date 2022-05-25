export default function Margin(props) {
	const { size } = props;
	const sizes = {
		l: 'md:h-[200px] h-[80px]',
		m: 'md:h-[90px] h-[30px]',
		s: 'md:h-[65px] h-[30px]',
        xs: 'md:h-[40px] h-[35px]'
	};

	return (
		<>
			<hr className={`border-none ${sizes[size] || size}`} />
		</>
	);
}
