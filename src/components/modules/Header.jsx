function Social() {}

export default function Header(props) {
    const coverAll = 'absolute top-0 left-0 w-full h-full';
	return (
		<>
			<header>
				<div
					id='backdrop'
					className={coverAll + ' z-10 bg-gradient-to-b from-black opacity-50'}
				/>
				<nav></nav>
			</header>
		</>
	);
}
