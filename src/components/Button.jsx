function Button({value, onClick}) {

  return<>
  <input type='button' value={value} onClick={onClick}/>
  </>
}

export default Button