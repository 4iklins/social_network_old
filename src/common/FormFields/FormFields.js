import errorImg from '../../img/warning_icon.svg'

const CreateField = ({input, meta:{ touched, error, warning },children, ...props}) => {
  const hasError = touched && error
  return(
    <div className ={"validField__" + input.name + (hasError ? "--error": "")}>
      {children}
      {hasError && <div className={`validField__warning-text`}>
        <img src ={errorImg} alt="error"></img>
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
  const {input,meta, ...restProps} = props
  return(
    <CreateField {...props} ><input {...input} {...restProps}/></CreateField>
  )
}