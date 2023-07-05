import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick}></div>;
};

const Overlay = (props) => {
  return (
    <div className={styles.overlay}>
      <iframe
        allow="fullscreen"
        width="100%"
        height="100%"
        src={props.videoLink}
      ></iframe>
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
