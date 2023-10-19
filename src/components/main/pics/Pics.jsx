import { useRef, useState, useEffect } from 'react';
import './Pics.scss';

function Pics() {
	const frame = useRef(null);
	const box = useRef(null);
	//const [Scroll, setScroll] = useState(0);

	const handleScroll = () => {
		const pos = frame.current.offsetTop;
		const scroll = window.scrollY;
		console.log('scroll', scroll);
		const scroll2 = scroll - pos;

		if (
			scroll >= pos &&
			scroll < pos + frame.current.clientHeight - window.innerWidth
		) {
			//setScroll(scroll2);

			box.current.style.position = 'fixed';
			box.current.style.left = -scroll2 + 'px';
			box.current.style.top = '0px';
			//box.current.style.bottom = 'auto';
		} else if (scroll >= pos + frame.current.clientHeight - window.innerWidth) {
			box.current.style.position = 'absolute';
			box.current.style.top = frame.current.clientHeight - pos + 'px';
			console.log('pos', frame.current.clientHeight - box.current.clientHeight);
			//box.current.style.bottom = '0px';
		} else {
			box.current.style.position = 'absolute';
			box.current.style.top = 0;
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, []);
	return (
		<section className='myScroll pics' ref={frame}>
			<article ref={box}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</article>
		</section>
	);
}

export default Pics;
