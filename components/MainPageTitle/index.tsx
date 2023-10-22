import { FC } from "react";
//sass
import styles from "./index.module.sass";
import {Fade} from 'react-reveal'

type MainPageTitlePropsType = {
  title: string;
};

export const MainPageTitle: FC<MainPageTitlePropsType> = ({ title }) => {
  return (
    <div>
      <Fade left={true} cascade={true}>
      <h4 className={styles.title}>{title}</h4>
      </Fade>
      </div>
  );
};
