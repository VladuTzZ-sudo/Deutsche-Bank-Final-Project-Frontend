import { FC } from "react";
import styles from "./MiniCard.module.css";

interface MiniCardProps {
  onClick?: any;
  className?: string;
  children?: React.ReactNode;
  number: number;
}

const MiniCard: FC<MiniCardProps> = (props) => {
  return (
    <div onClick={() => {props.onClick(props.number)}} className={`${styles["button"]}`}>
      <div className={`${styles["upperButton"]}`}>
      </div>
      <div className={`${styles["lowerButton"]}`}>
        {props.number}
      </div>
    </div>
  );
};

export default MiniCard;
