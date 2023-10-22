import React, { useState, useEffect, FC } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Zoom from 'react-reveal/Zoom';
import {
  FormControl,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { FiMenu } from "react-icons/fi";
import { langs, localStorageKeys } from "../../constants";
import { Link, animateScroll as scroll } from "react-scroll";
import styles from "./index.module.sass";

export const Navbar: FC = () => {
  const t = useTranslations();
  const router = useRouter();
  const path = router.asPath;
  const [selectedLang, setSelectedLang] = useState(router.locale);
  const [isOpen, setIsOpen] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const handleChangeLang = (event: SelectChangeEvent) => {
    const eventLang = event.target.value;
    setSelectedLang(eventLang);
    localStorage.setItem(localStorageKeys.selectedLang, eventLang);
    router.push(path, undefined, { locale: eventLang });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (selectedLang) {
      router.push(router.asPath, undefined, {
        locale: selectedLang,
      });
    }
  }, [selectedLang]);

  return (
    <nav className={styles.navbar} id="navbar">
      <Zoom cascade>
        <div className={styles.navbar__logoCont}>
          <Image
            className={styles.navbar__logo}
            src={"/assets/img/logo2.svg"}
            alt="logo"
            width={124}
            height={69}
          />
        </div>
        <ul className={styles.navbar__menu}>
          <li className={styles.navbar__menuItem} onClick={closeMenu}>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {t("navbar.about")}
            </Link>
          </li>

          <li className={styles.navbar__menuItem} onClick={closeMenu}>
            <Link
              activeClass="active"
              to="branding"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {t("navbar.services")}
            </Link>
          </li>

          <li className={styles.navbar__menuItem} onClick={closeMenu}>
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {t("navbar.portfolio")}
            </Link>
          </li>

          <li className={styles.navbar__menuItem} onClick={closeMenu}>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {t("navbar.contact")}
            </Link>
          </li>
        </ul>

        <FormControl className={styles.navbar__language}>
          <Select
            value={selectedLang}
            onChange={handleChangeLang}
            className={styles.navbar__select}
          >
            {langs.map((lang) => (
              <MenuItem key={lang} value={lang}>
                {lang}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Zoom>
    </nav>
  );
};
