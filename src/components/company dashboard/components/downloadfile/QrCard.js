import QrCode from 'qrcode.react';

export default function QrCard({ qrRef, url, bgColor, qrColor, customImg, noImg, name }) {
	let imgCustom =  undefined;

	noImg ?
		imgCustom = null :
		customImg ?
			imgCustom = customImg :
			imgCustom = './logo-apple-icon192.png';

	return (
		<article className="card">
			<div className="qr-box"
				ref={qrRef}
				style={{ backgroundColor: bgColor }}>

				<QrCode
					size={250}
					value={url }
					bgColor={bgColor}
					fgColor={qrColor}
					level='H'
					includeMargin
					imageSettings={{
						src: imgCustom,
						height: 45,
						width: 45,
						excavate: true,
					}}
				/>

			</div>
			<h2 className="word-wrap">{name ? name : "XGenbox"}</h2>
			{/* <p>Enter the URL of your site and create your custom Qr Code in a few seconds with a few clicks.</p> */}
		</article>
	);
}