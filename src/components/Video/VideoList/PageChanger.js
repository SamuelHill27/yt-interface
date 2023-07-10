import styles from "./PageChanger.module.css";

const PageChanger = (props) => {
  const nextPageClickHandler = () => {
    props.onNextPage();
  }

  const prevPageClickHandler = () => {
    props.onPrevPage();
  }

  return (
    <div className={styles.pageChanger}>
      <button onClick={prevPageClickHandler}>{"<"}</button>
      <div>{`${props.pageNo}/${props.maxPageNo}`}</div>
      <button onClick={nextPageClickHandler}>{">"}</button>
    </div>
  );
};

export default PageChanger;
