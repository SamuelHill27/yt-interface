import styles from "./ChannelShortcuts.module.css";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DragIcon from "../../assets/menu.png";

const ChannelShortcuts = (props) => {
  const [channels, setChannels] = useState([
    "MXR Plays",
    "Brett Cooper",
    "Eridium",
    "Aba and Preach",
  ]);

  const onClickHandler = (event) => {
    props.onClick(event.target.value);
  };

  const handleOnDragEnd = (results) => {
    const { source, destination } = results;
    if (!destination) return;
    else if (destination.index === source.index) return;
    else {
      const reorderedChannels = [...channels];
      const [removedChannel] = reorderedChannels.splice(source.index, 1);
      reorderedChannels.splice(destination.index, 0, removedChannel);
      setChannels(reorderedChannels);
    }
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="ROOT" type="group">
        {(provided) => (
          <ul
            className={styles.list}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {/* watchlist and divider */}
            <li className={styles.list__item}>
              <button className={styles.list__item__button}>Watchlist</button>
            </li>
            <li className={`${styles.list__item} ${styles.list__add_item}`}>
              <button className={styles.list__item__button}>Add Channel</button>
            </li>
            <li className={styles.divider}></li>

            {/* channels */}
            {channels.map((channel, index) => (
              <Draggable draggableId={channel} key={channel} index={index}>
                {(provided) => (
                  <li
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    className={styles.list__item}
                  >
                    <img
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      className={styles.list__item__image}
                      src={DragIcon}
                      alt="drag icon"
                    ></img>
                    <button
                      className={styles.list__item__button}
                      onClick={onClickHandler}
                    >
                      {channel}
                    </button>
                  </li>
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

export default ChannelShortcuts;
