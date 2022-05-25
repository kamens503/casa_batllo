import Margin from '../utils/Margin';
import Title from '../utils/Title';
import Content from '../utils/Content';



export default function banner(props) {
	const { img, title, subtitle, logo } = props;
    const coverAll = 'absolute top-0 left-0 w-full h-full';

	return (
		<>
			<section id='banner' className='relative w-full h-[90vh] flex justify-center items-center'>
				<div id='content-wrapper' className="relative z-20 text-center md:w-1/2">
                <img src={logo} alt='logo Casa Batlló' className='w-64 m-auto' />
                    <Margin size='xs' />
                    <Title type='banner' tag='h1'>
                        {title}
                    </Title>
                    <Margin size='xxs' />
                    <Content className='max-w-lg m-auto'>
                        {subtitle}
                    </Content>
				</div>
				<div
					id='backdrop'
					className={coverAll + ' z-10 bg-gradient-to-t from-black opacity-50'}
				/>
                <div className='absolute bottom-0 z-30 w-full h-10 md:bg-ripped-lg bg-ripped-xs' />
				<img src={img} alt='' className={coverAll + " z-0 object-cover"}/>
			</section>
		</>
	);
}
