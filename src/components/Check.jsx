function Check({onCheck, label}) {

    return<>
        <input type='checkbox' onChange={onCheck}/>
        <label>{label}</label>
    </>
  }
  
  export default Check