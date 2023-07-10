import styles from "./SideList.module.css";
import List from "./List/List";

const SideList = ({ onSelect }) => {
  const selecthandler = (channel) => {
    onSelect(channel);
  };

  const tempChannelShortcuts = [
    {
      channelName: "MxR Plays",
      channelId: "id",
    },
    {
      channelName: "Aba and Preach",
      channelId: "id",
    },
  ];

  localStorage.setItem("items", JSON.stringify(tempChannelShortcuts));

  return (
    <>
      <button>Add Shortcut</button>
      <List onSelect={selecthandler} newItem={""}/>
    </>
  );
};

export default SideList;
