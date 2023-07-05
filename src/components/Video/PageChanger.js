import styles from "./PageChanger.module.css";

const PageChanger = (props) => {
  const pageNo = 1;

  const nextPageClickHandler = () => {
    props.onNextPage();
  }

  const prevPageClickHandler = () => {
    props.onNextPage();
  }

  return (
    <div className={styles.pageChanger}>
      <button onClick={prevPageClickHandler}>{"<"}</button>
      <div>{props.pageNo}</div>
      <button onClick={nextPageClickHandler}>{">"}</button>
    </div>
  );
};

export default PageChanger;
