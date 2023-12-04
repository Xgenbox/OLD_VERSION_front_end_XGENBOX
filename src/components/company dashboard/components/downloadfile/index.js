import { useRef, useState } from 'react';
// import ThemeBtn from './components/ThemeBtn';
import FormQrCustom from './FormQrCustom';
import QrCard from './QrCard';

export default function Index({id, name}) {
	// console.log("sdddddddddddddddd", id)
	const qrRef = useRef();

	const [url, setUrl] = useState(''),
			[qrColor, setQrColor] = useState('#000000'),
			[qrBgColor, setQrBgColor] = useState('#F7FAFC'),
			[customImg, setCustomImg] = useState('			'),
			[noImg, setNoImg] = useState(false);

	const handleQrReset = () => {
		setUrl('');
		setQrColor('#000000');
		setQrBgColor('#FCFDFF');
		setCustomImg();
		setNoImg(false);
	}

	return (
		<>
			<header>
				{/* <ThemeBtn /> */}
			</header>

			<main>
				<FormQrCustom
					qrRef={qrRef}
					url={id}
					qrColor={qrColor}
					qrBgColor={qrBgColor}
					noImg={noImg}
					setUrl={setUrl}
					setQrColor={setQrColor}
					setQrBgColor={setQrBgColor}
					setCustomImg={setCustomImg}
					setNoImg={setNoImg}
					handleQrReset={handleQrReset}
					name={name}

				/>

				<QrCard
					qrRef={qrRef}
					url={id}
					qrColor={qrColor}
					bgColor={qrBgColor}
					customImg={customImg}
					noImg={noImg}
					name={name}
				/>
			</main>
		</>
	);
}