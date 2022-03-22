import errorImg from '../../img/warning_icon.svg'

const CreateField = ({input, meta:{ touched, error, warning },children, ...props}) => {
  const hasError = touched && error
  return(
    <div className ={"validField_" + input.name + (hasError ? "_error": "")}>
      {children}
      {hasError && <div className={`warning_${input.name}`}>
        <img src ={errorImg}></img>
        <span>{error}</span>
      </div>}
    </div>
  )
}


export const Textarea = (props) => {
  const {input,meta, ...restProps} = props
  return(
    <CreateField {...props}><textarea {...input} {...restProps}/></CreateField>
  )
}

export const Input = (props) => {
  debugger
  const {input,meta, ...restProps} = props
  return(
    <CreateField {...props} ><input {...input} {...restProps}/></CreateField>
  )
}