import styles from "./Item.module.css";
import DragIcon from "../../assets/menu.png";

const Item = ({ provided, onSelect, data }) => {
  const onClickHandler = () => {
    onSelect(data);
  };

  return (
    <li
      {...provided.draggableProps}
      ref={provided.innerRef}
      className={styles.item}
    >
      <img
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        className={styles.item__image}
        src={DragIcon}
        alt="drag icon"
      ></img>
      <button className={styles.item__button} onClick={onClickHandler}>
        {data}
      </button>
    </li>
  );
};

export default Item;
