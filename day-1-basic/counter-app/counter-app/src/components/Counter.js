const Counter = ({count}) => {
    return(
        <div style={{marginTop: "24px"}}>
          {count < 0 && <small>counter is negative ({count})</small>}
          {count === 0 && <small>counter is zero ({count})</small>}
          {count > 0 && <small>counter is positive ({count})</small>}
        </div>
    )
}

export default Counter;