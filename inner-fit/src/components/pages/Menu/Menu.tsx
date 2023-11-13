import {useContext} from "react";
import WithRoundedStyle from "../../../hoc/WithRoundedStyle";
import {getLocalizedText} from "../../../services/LanguageService";
import {LanguageContext} from "../../../context/LanguageContext";

// const {language} = getLocalizedText()
// console.log(language);
// const SignIn = () => {
//     return language.pages.SignIn
// }

const styleProps = {
	backgroundColor: "var(--bg-light)",
	color: "var(--text-dark)",
};

const Menu = () => {
	const {language} = useContext(LanguageContext);

	const translate = getLocalizedText(language);
	// console.log(language);
	const SignIn = () => {
		return translate.pages.SignIn;
  };
  
  // console.log(translate.pages.SignIn);

	const isMobile = window.matchMedia("(max-width: 768px)").matches;

	const StiledComponent = WithRoundedStyle(SignIn, styleProps);

	return (
		<>
			{isMobile ? (
				<div>
					<img src="/assets/menu_hamb_claro.png" />
				</div>
			) : (
				<div>
					<ul>
						<li>{translate.pages.HIW}</li>
            <li>{translate.pages.Team}</li>
            <li>{translate.pages.Memberships}</li>
            <li>{translate.pages.Contact}</li>
						<li>
							<StiledComponent />
						</li>
					</ul>
				</div>
			)}
		</>
	);
};

export default Menu;
