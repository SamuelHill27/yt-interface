import styles from "./SideList.module.css";
import List from "./List/List";
import { useEffect, useState } from "react";

const SideList = ({ onSelect }) => {
  const onSelectHandler = (data) => {
    onSelect(data);
  };

  return (
    <>
      <button>Add Shortcut</button>
      <List onSelect={onSelectHandler} />
    </>
  );
};

export default SideList;
