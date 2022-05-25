export default function content(props) {
	const { tag, children, type, className, color } = props;
	const Tag = tag ? `${tag}` : 'h2';
	const types = {
		medium: 'text-[1.2rem] md:text-[1rem]',
		big: 'md:text-[2rem] text-[1.2rem]',
		small: 'md:text-[1rem] text-[1rem]',
	};
	return (
		<>
			<Tag className={`font-content ${types[type || "medium"]} ${color || 'text-white'} ${className}`}>
				{children}
			</Tag>
		</>
	);
}
