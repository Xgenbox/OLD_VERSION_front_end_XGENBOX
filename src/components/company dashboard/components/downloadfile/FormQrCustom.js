import { useEffect, useState } from 'react';
import InputUrl from './InputUrl';
import { Button } from 'reactstrap';


export default function FormQrCustom({ qrRef, handleQrReset, name }) {
	const httpRgx = /^https?:\/\//;

	const [downloaded, setDownloaded] = useState(false);

	useEffect(() => {
		if(downloaded) {
			const msg = setTimeout(()=>setDownloaded(false), 3500);
			return () => clearTimeout(msg);
		}
	}, [downloaded]);




	const downloadQrCode = e => {
		// e.preventDefault();

		const qrCanvas = qrRef.current.querySelector('canvas'),
				qrImage = qrCanvas.toDataURL("image/png"),
				qrAnchor = document.createElement('a'),
				fileName = name.replace(httpRgx, '').trim();
		qrAnchor.href = qrImage;
		qrAnchor.download = fileName+'_QrCode.png';
		document.body.appendChild(qrAnchor);

		qrAnchor.click();
		document.body.removeChild(qrAnchor);

		handleQrReset();
		setDownloaded(true);
	}

	return(
		<>

			{/* <InputUrl
				url={"facebook"}
				// setUrl={setUrl}
				// httpRgx={httpRgx}
			/> */}




			<Button
  color={ "success"}
  // onClick={request?.status ? () => Unblock(request?._id) : () => block(request?._id)}
  size="sm"
  onClick={()=>downloadQrCode()}

>
	  { "Download" }
</Button>



			{downloaded &&
				<p className="success-msg">Qr Code downloaded.</p>
			}

		</>
	);
}