import styles from "./Item.module.css";
import Card from "../UI/Card";
import RemoveIcon from "../../../assets/x.png";

const Item = ({ onSelect, onDelete, id, value }) => {
  const selectHandler = () => {
    onSelect({id, value});
  };

  const deleteHandler = () => {
    onDelete({id, value});
  };

  return (
    <Card className={styles.item}>
      <button
        className={styles.item__select_btn}
        onClick={selectHandler}
      >
        {value}
      </button>
      <button className={styles.item__delete_btn} onClick={deleteHandler}>
        <img src={RemoveIcon} alt="remove icon"></img>
      </button>
    </Card>
  );
};

export default Item;
