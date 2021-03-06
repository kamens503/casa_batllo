import Margin from "./Margin";

export default function title(props) {
	const { tag, children, type, className, color } = props;
	const Tag = tag ? `${tag}` : 'h2';
	const types = {
		big: 'font-title text-[2rem] md:text-[4rem]',
		subtitle: 'font-content md:text-[2rem] text-[1.2rem]',
		menu: 'font-content md:text-[2rem] text-[1.7rem]',
        banner: 'font-title text-[1.5rem] md:text-[2rem]',
        modal: 'font-title md:text-[2rem] text-[1.7rem]',
        subModal: 'font-content text-[1.2rem] font-bold'
	};
	return (
		<>
			<Tag className={`${types[type || 'big']} ${color || 'text-white'} ${className || ''}`}>
				{children}
			</Tag>
		</>
	);
} 
