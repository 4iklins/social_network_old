import errorImg from '../../img/warning_icon.svg'

export const CreateField = ({input, meta:{ touched, error },ctrEnterPress,fieldType, ...props}) => {
  let onCtrEnterPress = (evt) => {
    if(evt.ctrlKey && evt.charCode === 13){
      ctrEnterPress()
    }
  }
  const hasError = touched && error
  const Field = fieldType
  return(
    <div className ={"validField__" + input.name + (hasError ? "--error": "")}>
      <Field {...input} {...props} onKeyPress = {onCtrEnterPress}/>
      {hasError && <div className={`validField__warning-text`}>
        <img src ={errorImg} alt="error"></img>
        <span>{error}</span>
      </div>}
    </div>
  )
}
