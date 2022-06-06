export default function Link(props) {
	const { tag, children, href, className, color } = props;
	const Tag = tag ? `${tag}` : 'a';

	return (
		<>
			<Tag href={href} className={`relative group font-content text-[1.5rem] px-1 ${color || 'text-white'} ${className || ''}`}>
				{children}
				<span className="absolute left-0 bottom-0 w-0 mt-1 h-[2px] bg-white group-hover:w-full transition-all"/>
			</Tag>
		</>
	);
} 
