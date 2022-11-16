import './SomeError.scss';

const SomeError = (props) => {
  return(
    <div className='error-popup'>{props.errorMessage}</div>
  )
}
export default SomeError