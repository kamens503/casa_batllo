import Title from '../utils/Title';
import Content from '../utils/Content';
import Margin from '../utils/Margin';

function ContentModal(props) {
	const { data } = props;
	if (data) {
		return (
			<ul id='content'>
				{data.map((content) => {
					return (
						<li className=''>
							<div className='flex items-center'>
								<Title className='mr-1 no-wrap' type='subModal' color='text-black'>
									{content[0]}
								</Title>
								<span className='w-full divide-y-2 divide-black divide-dashed h-[1px]' />
							</div>
							{content[1] ? <Margin size='xxs' /> : ''}
							<Content color='text-black'>{content[1]}</Content>
							<Margin size='h-[25px]' />
						</li>
					);
				})}
			</ul>
		);
	}
}

function MultiContent(props) {
	const { data: dataObj } = props;
	if (dataObj) {
		dataObj.map((data) => {
			return (
				<>
					<Title>{data.title}</Title>
					<ul id='content'>
						{data.content.map((content) => {
							return (
								<li className=''>
									<div className='flex'>
										<Title className='mr-1' type='subModal' color='text-black'>
											{content[0]}
										</Title>
										<Margin size='xxs' />
										<span className='divide-y divide-dashed' />
									</div>
								</li>
							);
						})}
					</ul>
				</>
			);
		});
	}
}

export default function Modal(props) {
	const { isOpen, data, className, onClick } = props;
	const absoluteCenter =
		'absolute top-[-50%] left-[-50%] translate-x-1/2 translate-y-1/2 z-40';
	console.log({ data });

	if (isOpen) {
		return (
			<article onClick={onClick}
				className={`fixed top-0 w-screen h-screen z-50 ${className} flex justify-center items-center`}
				id='menuModal'
			>
				<section
					className='h-[80vh] w-[90vw] max-h-[700px] max-w-[480px] bg-white relative z-20 p-4 overflow-y-auto'
					id='modal-wrapper'
				>
					<img src={data?.img} alt={data?.title} className=' aspect-video' />
					<Margin size='xs' />
					<Title type='modal' color='text-black'>
						{data?.title}
					</Title>
					<Margin size='xxs' />
					<ContentModal data={data?.content} />
					<MultiContent data={data?.multiContent} />
                    <Margin size="xxs" />
				</section>
				<div
					id='backdrop'
					className='absolute w-full h-full bg-black opacity-50'
				/>
			</article>
		);
	}
}
