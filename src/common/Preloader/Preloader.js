import "./Preloader.scss";
import PreloaderImg from "../../img/preloader.svg"

function Preloader () {
  return(
    <div className="preloader-box">
      <img src={PreloaderImg} alt="" className="preloader" />
    </div>
  )
}

export default Preloader;