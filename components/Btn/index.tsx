import { FC } from "react";
//sass
import styles from "./index.module.sass";
import { Button } from "@mui/material";
import Fade from 'react-reveal/Fade';


export const Btn: FC<any> = () => {
  return (
    <div>
      <Fade top cascade>
        <Button variant="text" className={styles.btn}>
          <div className={styles.btn__btnAnime}></div>
          <p className={styles.btn__text}>Let’s collaborate</p>
        </Button>
      </Fade>
    </div>
  );
};
