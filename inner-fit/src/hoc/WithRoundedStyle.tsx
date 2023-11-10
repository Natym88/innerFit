import { ComponentType } from 'react'

export interface Styles {
    border: string,
    backgroundColor: string,
    color: string,
    padding: string,
    width: string,
    borderRadius: string
}
const defaultStyles: Styles = {
    border: '1px solid var(--text-light)',
    backgroundColor: 'transparent',
    color: 'var(--text-light)',
    padding: '10px',
    width: 'fit-content',
    borderRadius: '100px'
}

const WithRoundedStyle = <T extends object>(Component: ComponentType<T>, customStyles?: Partial<Styles>) => {
    const WithRounded: React.FC<T> = (props) => {
        const { backgroundColor, color, border, ...restDefaultStyles } = defaultStyles;
        const mergedStyles = {
          ...restDefaultStyles,
          ...customStyles, // Permite pasar estilos personalizados como argumento
          backgroundColor: customStyles?.backgroundColor || backgroundColor,
          color: customStyles?.color || color,
          border: customStyles?.border || border
        };
        return <Component {...props} style={mergedStyles} />
    }
    return WithRounded
}

export default WithRoundedStyle