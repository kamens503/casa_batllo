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
                <img src={logo} alt='logo Casa Batlló' className='m-auto md:w-64 w-36' />
                    <Margin size='xs' />
                    <Title type='banner' tag='h1'>
                        {title}
                    </Title>
                    <Margin size='xxs' />
                    <Content className='max-w-lg m-auto'>
                        {subtitle}
                    </Content>
				</div>
				<div id='backdrop'
					className={coverAll + ' z-10 bg-gradient-to-t from-black opacity-50 bg-no-repeat'}
				/>
                <div className='absolute bottom-0 z-30 w-full bg-no-repeat md:bg-ripped-lg bg-ripped-xs mb-[-1rem] bg-cover bg-left-bottom lg:h-[70px] h-[40px]' />
				<img src={img} alt='' className={coverAll + " z-0 object-cover "}/>
			</section>
		</>
	);
}
