export default function InputUrl({ url, setUrl, httpRgx }) {
	const handleUrl = e => setUrl(e.target.value),
			handleClearUrl = () => setUrl('');


	return(
		<div className="relative">


			{url &&
				<button className="clear-btn" onClick={handleClearUrl}>x</button>
			}
		</div>
	);
}