export default function content(props) {
	const { tag, children, type, className, color } = props;
	const Tag = tag ? `${tag}` : 'h2';
	const types = {
		medium: 'font-title text-[2rem] md:text-[4rem]',
		big: 'font-content md:text-[2rem] text-[1.2rem]',
		small: 'font-content md:text-[2rem] text-[1.7rem]',
	};
	return (
		<>
			<Tag className={`${types[type]} ${color || 'text-white'} ${className}`}>
				{children}
			</Tag>
		</>
	);
}
