import styles from "./List.module.css";
import Item from "./Item";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";

const List = ({ onSelect }) => {
  const [items, setItems] = useState([
    "item 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 ",
    "MxR Plays",
    "item 3",
    "item 4",
    "item 5",
  ]);

  const onSelectHandler = (item) => {
    onSelect(item);
  };

  const onDragEndHandler = (results) => {
    const { source, destination } = results;
    if (destination && destination.index !== source.index) {
      const reorderedItems = [...items];

      // remove selected channel from new list
      const [removedChannel] = reorderedItems.splice(source.index, 1);

      // readd selected channel to new list at new index
      reorderedItems.splice(destination.index, 0, removedChannel);

      setItems(reorderedItems);
    } else return;
  };

  return (
    <DragDropContext onDragEnd={onDragEndHandler}>
      <Droppable droppableId="ROOT" type="group">
        {(provided) => (
          <ul
            className={styles.list}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {items.map((item, index) => (
              <Draggable draggableId={item} key={item} index={index}>
                {(provided) => (
                  <Item
                    provided={provided}
                    onSelect={onSelectHandler}
                    data={item}
                  />
                )}
              </Draggable>
            ))}

            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default List;
