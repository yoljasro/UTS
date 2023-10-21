import { FC } from "react";
//sass
import styles from "./index.module.sass";
import { Button } from "@mui/material";


export const Btn: FC<any> = () => {
  return (
    <div>
      <Button variant="text" className={styles.btn}>
      <div className={styles.btn__btnAnime}></div>
      <p className={styles.btn__text}>Let’s collaborate</p>
      </Button>
      </div>
  );
};
