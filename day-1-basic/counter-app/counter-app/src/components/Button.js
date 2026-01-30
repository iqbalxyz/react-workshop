const Button = ({increment, decrement, reset}) => {
    return(
        <div className="button-group">
          <div 
            onClick= {increment}
            className="btn btn-increment">+</div>
          <div
            onClick= {decrement}
            className="btn btn-decrement">-</div>
          <div 
            onClick= {reset}
            className="btn btn-reset">Reset</div>
        </div>
    )
}

export default Button;