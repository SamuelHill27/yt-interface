import styles from "./List.module.css";
import Item from "./Item";
import { useState, useEffect } from "react";

const List = ({ onSelect, newItem }) => {
  const [items, setItems] = useState([]);

  // gets items from local storage if it exists at initial render
  useEffect(() => {
    const itemsInLocalStorage = localStorage.getItem("items");
    if (itemsInLocalStorage) {
      setItems(JSON.parse(itemsInLocalStorage));
    }
  }, []);

  const fetchItems = () => {
    // fetch items from online database
    return [];
  };

  // add new item - updates upon change in prop state
  useEffect(() => {
    const itemAlreadyExists = !items.find(item => item.id === newItem.id);
    if (newItem && itemAlreadyExists) {
      setItems((prevItems) => [...prevItems, newItem]);
    }
  }, [newItem]);

  // delete existing item by filtering it out using ids
  const deleteHandler = (item) => {
    setItems((prevItems) => {
      return prevItems.filter((prevItem) => {
        return prevItem.id !== item.id;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const selectHandler = (item) => {
    onSelect(item);
  };

  return (
    <>
      {items.length !== 0 ? (
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={Math.random()} className={styles.list__item}>
              <Item
                onSelect={selectHandler}
                onDelete={deleteHandler}
                id={item.id}
                value={item.value}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No channel shortcuts</p>
      )}
    </>
  );
};

export default List;
