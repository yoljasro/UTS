import { FC } from "react";
//sass
import styles from "./index.module.sass";

type MainPageTitlePropsType = {
  title: string;
};

export const MainPageTitle: FC<MainPageTitlePropsType> = ({ title }) => {
  return (
    <div>
      <h4 className={styles.title}>{title}</h4>
      </div>
  );
};
