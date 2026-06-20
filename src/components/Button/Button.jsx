import "./Button.css";

const Button = ({variant , children , onClick})=>{

const variantClass = 
    variant ==="secondary" ? "btn-secondary " : 
    variant==="icon" ? "btn-icon " :"btn-primary";


    return (
        <button className={`btn ${variantClass}`} onClick={onClick}>        
            {children}
        </button>
    );
}

export default Button;