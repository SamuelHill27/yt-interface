import styles from "./Item.module.css";
import Card from "../UI/Card";
import { useRef } from "react";
import RemoveIcon from "../../../assets/x.png";

const Item = ({ onSelect, onDelete, text }) => {
  const textRef = useRef();

  const selectHandler = () => {
    onSelect(textRef.current.textContent);
  };

  const deleteHandler = () => {
    onDelete(textRef.current.textContent);
  };

  return (
    <Card>
      <button
        className={styles.item__select_btn}
        onClick={selectHandler}
        ref={textRef}
      >
        {text}
      </button>
      <button className={styles.item__delete_btn} onClick={deleteHandler}>
        <img src={RemoveIcon} alt="remove icon"></img>
      </button>
    </Card>
  );
};

export default Item;
