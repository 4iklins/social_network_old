
export const Textarea = ({input, meta:{ touched, error, warning }, ...props}) => {
  debugger
  return(
    <div>
      <textarea {...input} {...props}></textarea>
      {error && <span>{error}</span>}
    </div>
  )
}