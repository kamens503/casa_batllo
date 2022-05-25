export default function Margin(props) {
	const { size } = props;
	const sizes = {
		components: 'md:h-[200px] h-[80px]',
		title: 'md:h-[90px] h-[30px]',
		menu: 'md:h-[65px] h-[30px]',
        xs: 'md:h-[40px] h-[35px]'
	};

	return (
		<>
			<hr className={`border-none ${sizes[size] || size}`} />
		</>
	);
}
