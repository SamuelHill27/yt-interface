import styles from "./List.module.css";
import Item from "./Item";
import { useState, useEffect } from "react";

const List = ({ onSelect }) => {
  const [items, setItems] = useState([]);

  // gets items from local storage if it exists
  useEffect(() => {
    const itemsInLocalStorage = localStorage.getItem("items");
    if (itemsInLocalStorage) {
      setItems(itemsInLocalStorage);
    }
  }, []);

  // sets local storage from items upon items change
  useEffect(() => {
    localStorage.setItem("items", items);
  }, items);

  // add new Item
  useEffect(() => {
    setItems((prevItems) => [...prevItems]);
  }, []);

  const onSelectHandler = (item) => {
    onSelect(item);
  };

  return (
    <ul className={styles.list}>
      {items.map((item, index) => (
        <li key={Math.random()}>
          <Item onSelect={onSelectHandler} data={item} index={index} />
        </li>
      ))}
    </ul>
  );
};

export default List;
