import './button.css'

const Button = ({label, text}) => {
    const saylabel = ()  => {
        alert(`A label desse botão é '${label}'`)
    }
    return <button className="btn" onClick={saylabel} label={label}>{text}</button> 
}

Button.defaultProps = {
    label: 'Clique aqui'
}

export default Button   