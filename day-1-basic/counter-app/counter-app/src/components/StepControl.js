const StepControl = ({stepValue, handleStepChange}) => {
    return(
        <div className='step-control'>
          <label>Step Value: {stepValue}</label>
          <input
          id="step-input"
          min={"1"}
          value={stepValue}
          placeholder="Input step value"
          setStepValue
          onChange={handleStepChange}
          />
        </div>
    )
}

export default StepControl;