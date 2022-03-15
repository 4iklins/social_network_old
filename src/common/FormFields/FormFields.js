export const CreateField = ({input, meta:{ touched, error, warning },children, ...props}) => {
  return(
    <div>
      {children}
      {error && <span>{error}</span>}
    </div>
  )
}


export const Textarea = (props) => {
  const {input, ...restProps} = props
  return(
    <CreateField {...props}><textarea {...input} {...props}/></CreateField>
  )
}