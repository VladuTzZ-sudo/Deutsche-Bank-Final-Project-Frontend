import { FC } from "react";
import Data from "../../models/Data";
import styles from "./DataCard.module.css";

interface DataProps {
  dataInfo: Data;
  className?: string;
  onClick?: React.MouseEventHandler;
}

const DataCard: FC<DataProps> = (props) => {
  const image =
    props.dataInfo.icon === ""
      ? process.env.PUBLIC_URL + "/assets/data-images/folder-blue-icon.png"
      : props.dataInfo.icon;

  return (
    <div
      className={`${styles["card"]} ${props.className}`}
      onClick={props.onClick}
    >
      <img src={image} className={`${styles["card__image"]}`} />
      <div className={styles["card__content"]}>
        {props.dataInfo.title === "" ? null : (
          <p className={styles["card__title"]}>{props.dataInfo.title}</p>
        )}
        {props.dataInfo.date === null ? null : (
          <p className={styles["card__date"]}>09/28/2021, 10:44 am</p>
        )}
      </div>
    </div>
  );
};

export default DataCard;