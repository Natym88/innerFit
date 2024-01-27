import { ComponentType, FC } from 'react'

export interface Styles extends React.CSSProperties {
    border: string,
    backgroundColor: string,
    color: string,
    padding: string,
    width: string,
    borderRadius: string,
    minWidth?: string,
    maxWidth?: string
}
const defaultStyles: Styles = {
    border: '1px solid var(--text-light)',
    backgroundColor: 'transparent',
    color: 'var(--text-light)',
    padding: '10px',
    width: 'fit-content',
    borderRadius: '100px',
    textAlign: 'center',
}

const WithRoundedStyle = <T extends object>(Component: ComponentType<T>, customStyles?: Partial<Styles>) => {
    const WithRounded: FC<T> = (props) => {
        const { backgroundColor, color, border, padding, ...restDefaultStyles } = defaultStyles;
        const mergedStyles = {
          ...restDefaultStyles,
          ...customStyles, // Permite pasar estilos personalizados como argumento
          backgroundColor: customStyles?.backgroundColor || backgroundColor,
          color: customStyles?.color || color,
          border: customStyles?.border || border,
          padding: customStyles?.padding || padding
        };
        return <Component {...props} style={mergedStyles} />
    }
    return WithRounded
}

export default WithRoundedStyle