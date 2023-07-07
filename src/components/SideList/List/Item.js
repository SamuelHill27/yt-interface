import styles from "./Item.module.css";
import Card from "../UI/Card";

const Item = ({ onSelect, data }) => {
  const onClickHandler = () => {
    onSelect(data);
  };

  return (
    <Card>
      <button className={styles.item__button} onClick={onClickHandler}>
        {data}
      </button>
      <button>img</button>
    </Card>
  );
};

export default Item;
