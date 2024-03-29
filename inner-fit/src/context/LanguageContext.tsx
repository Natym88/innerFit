import {FC, createContext, useState} from "react";

export interface LanguageContextProps {
	language: "en" | "es";
	toggleLanguage: () => void;
}

interface LanguageProviderProps {
	children: React.ReactNode;
}

export const LanguageContext = createContext({} as LanguageContextProps);

const LanguageProvider: FC<LanguageProviderProps> = ({children}) => {
	const [language, setLanguage] = useState<"en" | "es">("en");

	const toggleLanguage = () => {
		setLanguage(language === "en" ? "es" : "en");
	};

	const contextValue: LanguageContextProps = {
		language,
		toggleLanguage,
	};

	return (
		<LanguageContext.Provider value={contextValue}>
			{children}
		</LanguageContext.Provider>
	);
};

export default LanguageProvider;
