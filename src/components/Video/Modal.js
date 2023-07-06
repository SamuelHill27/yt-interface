import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import CinemaSeats from "../../assets/VueSeats-edit3.png";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick}></div>;
};

const Overlay = (props) => {
  return (
    <div className={styles.overlay}>
      <iframe
        className={styles.iframe}
        allow="fullscreen"
        width="70%"
        height="70%"
        src={props.videoLink}
      ></iframe>
      <img className={styles.image} src={CinemaSeats} alt="Cinema Seats"></img>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay videoLink={props.videoLink} />,
        document.getElementById("backdrop-root")
      )}
    </>
  );
};

export default Modal;
