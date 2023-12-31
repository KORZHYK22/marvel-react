import { useState, useRef } from "react";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import decoration from "../../resources/img/vision.png";
import CharSearchForm from "../CharSearchForm/CharSearchForm";

const MainPage = () => {
	const [selectedChar, setChar] = useState(null);
	const ref = useRef(null);

	const onCharSelected = (id) => {
		setChar(id);
		ref.current?.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<>
			<ErrorBoundary>
				<RandomChar />
			</ErrorBoundary>
			<div className="char__content">
				<ErrorBoundary>
					<CharList onCharSelected={onCharSelected} />
				</ErrorBoundary>
				<div className="char__select">
					<ErrorBoundary>
						<CharSearchForm />
					</ErrorBoundary>
					<ErrorBoundary>
						<CharInfo charId={selectedChar} ref={ref} />
					</ErrorBoundary>
				</div>
			</div>
			<img className="bg-decoration" src={decoration} alt="vision" />
		</>
	);
};

export default MainPage;
