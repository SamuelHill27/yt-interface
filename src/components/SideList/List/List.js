import styles from "./List.module.css";
import Item from "./Item";
import { useState, useEffect } from "react";

const List = ({ onSelect, newItem }) => {
  const [items, setItems] = useState([]);

  // gets items from local storage if it exists
  useEffect(() => {
    const itemsInLocalStorage = localStorage.getItem("items");
    if (itemsInLocalStorage) {
      setItems(JSON.parse(itemsInLocalStorage));
    } else {
      setItems(fetchItems());
    }
  }, []);

  const fetchItems = () => {
    // fetch items from online database
    return [];
  };

  // add new item
  useEffect(() => {
    if (newItem !== "") {
      setItems((prevItems) => [...prevItems, newItem]);
    }
  }, [newItem]);

  // delete existing item
  const deleteHandler = (channelName) => {
    setItems((prevItems) => {
      return prevItems.filter((prevItem) => {
        return prevItem.channelName !== channelName;
      });
    });
  };

  const selectHandler = (item) => {
    onSelect(item);
  };

  return (
    <>
      {items.length !== 0 ? (
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={Math.random()}>
              <Item
                onSelect={selectHandler}
                onDelete={deleteHandler}
                text={item.channelName}
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
