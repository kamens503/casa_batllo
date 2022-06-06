import wsIcon from '../../assets/ws_icon.png';

export default function Whatsapp(props) {
	const { phone } = props;
	return (
		<a href={`https://wa.me/${phone}`} className='fixed bottom-0 right-0 z-30 m-4 lg:m-6' target='_blank' rel='noreferrer'>
			<img src={wsIcon} className='w-12 lg:w-16 aspect-auto' alt=''/>
		</a>
	);
}
