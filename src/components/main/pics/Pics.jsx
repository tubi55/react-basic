import { useRef, useEffect } from 'react';
import './Pics.scss';

function Pics() {
	const frame = useRef(null);
	const box = useRef(null);

	const handleScroll = () => {
		const pos = frame.current.offsetTop;
		let scroll = window.scrollY;
		let scroll2 = scroll - pos;

		if (
			scroll >= pos &&
			scroll < pos + frame.current.clientHeight - window.innerWidth
		) {
			box.current.style.position = 'fixed';
			box.current.style.left = -scroll2 + 'px';
			box.current.style.top = '0px';
		} else if (scroll >= pos + frame.current.clientHeight - window.innerWidth) {
			box.current.style.position = 'absolute';
			box.current.style.top = frame.current.clientHeight - pos + 'px';
			box.current.style.left = -window.innerWidth * 3;
		} else {
			box.current.style.position = 'absolute';
			box.current.style.top = '0px';
			box.current.style.left = '0px';
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
