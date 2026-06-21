import "./Button.css";

const Button = ({variant , size, children , onClick})=>{

const variantClass = 
    variant ==="secondary" ? "btn-secondary " : 
    variant==="icon" ? "btn-icon " :
    variant ==="success" ? "btn-success" :
    "btn-primary";
 
const sizeClass = 
    size ==="small" ? "btn-small" : " ";

    return (
        <button className={`btn ${variantClass} ${sizeClass}`} onClick={onClick}>        
            {children}
        </button>
    );
}

export default Button;