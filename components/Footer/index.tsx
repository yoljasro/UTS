import React from "react";
import styles from "./index.module.sass";

export const Footer = () => {
  return (
    <div
      className={styles.footer}
      data-aos="fade-down"
      data-aos-duration="1300"
    >
      <div className={styles.container}>
        <div className={styles.footer__row}>
          <div className={styles.footer__item}>
            <h3 className={styles.footer__title}>@2023 All rights reserved.</h3>
            <p>
              We use cookies to enhance your browsing experience and analyze
              site usage.
            </p>
          </div>
          <div className={styles.footer__item}>
            <h3 className={styles.footer__title}>Subscribe</h3>
            <ul>
              <li>
                <a href="#">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_112_22)">
                      <path
                        d="M36.6667 20.0002C36.6667 10.8002 29.2 3.3335 20 3.3335C10.8 3.3335 3.33337 10.8002 3.33337 20.0002C3.33337 28.0668 9.06671 34.7835 16.6667 36.3335V25.0002H13.3334V20.0002H16.6667V15.8335C16.6667 12.6168 19.2834 10.0002 22.5 10.0002H26.6667V15.0002H23.3334C22.4167 15.0002 21.6667 15.7502 21.6667 16.6668V20.0002H26.6667V25.0002H21.6667V36.5835C30.0834 35.7502 36.6667 28.6502 36.6667 20.0002Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_112_22">
                        <rect width="40" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect width="40" height="40" fill="url(#pattern0)" />
                    <defs>
                      <pattern
                        id="pattern0"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_112_25"
                          transform="scale(0.0104167)"
                        />
                      </pattern>
                      <image
                        id="image0_112_25"
                        width="96"
                        height="96"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFTElEQVR4nO2dz29VRRTHb1AKmoChgIkWjPsGdxD9Ewg/IhR/RLeEgPxwicrWFrY2BEPQjdEoGl2oqH8BRHcSDVVXUFworQnUH5S+5mMmHEJp7rt33pszc9+993ySl7y0ve9858y8+XHmzDTLDMMwDMMwDMMwDMMwDEMR4CHgOeAt4HPgZ+Av4A7Vc0e0/CTa3gSeBVbUvhEAm4FTwHXqxzRwEtiU1Q1gI3AWmKf+zANngPVZHQBeAWZpHjPAS9mgAqwEztF83gUezgYJ4FHgG9rD167M2QC1/DY5f2klVP9NaEm3040zVTv/VZrJNWAMWCOvPcBUl799scqp5mxDnT+cU95hWRss50be36eoADfPbyJjBWV+ocszp6tY4TZhkZXHmoJyr819Am4DIykrwIUXaGEFPFbw3ETKwFodYzu+7CkouxuYi8aO+AE8iWo2mamCQfjXkme3pagAF1JuOtMy4K6V15iH8x1vpKgAFzNPTQe4CIwDe4FRYJ2swlfK+1H53QRwCVisQOdnKSrAbVyk4hpwvJ8ZhovjuxbZZe4ei8txvP5gwVIsvv4EDgBDCnqHgEMSTo7NDR0vFxco9vz/oxgrS7ehAnwSWfttbd15BYm5N7s/gf6DwEKsQtS1Av4BtkcXf78MO8SmOinEx2j526MLz68E9W9CCuHa7I8uuntZ3OCsSgrRmnzYo+2ngKPAd7Ji/VteU/KzIy5Q2ONnntcsUBYbRa0zwAZPmyMS/nYLsjLcAuxT4OkeZkcupq9CsIM9BGtxwNPe88BcH59/C9jtaeOwVqGCHewhVmuFO+Rh6/XAkIJ79piHnVVaEV41RxeI1eC4Z8tfVLC16PNNkJzQYNQcXSA0lE5ZbIe7cZx+up2i7uhJj12+4ApXd3iO0FAueth4H33Oedj9PtSImqMLRIYy7jHV7KBPpyzTWbKhg1B3eI7IaFt+DjdoEo/DWQHAvlADWWwUnDBa8vnfEo8LJba3hBpQd3iOyFAKQ83Ab8RjqsT2hlAD6g7PERlK4fwf3dnPcuY81gNBqDs8R2SdK+Bmie1WVEBZF/QL8bhSYrsVXZANwhVXwN6Szz9CPA6V2O6WfOtNFhsFJ0x4hAQ66LPgsRALznlVd3iOyFAuedh4D33Oetj9IdSImqMLRIay6NESRySApsVN4AmPEEgrgnFeOZTAbsVw9K5UOa9qji4QqsG054bMMYUNmaMedlYDv2sUTM3RBWKTzEiWfRNu9dnt7Mw8kI1+FbLYaAmVHNONPRwIfMczj8e1+g/K+vxlm/JqeaPBDvYQrMnHPdreJBvo7mD4FQlbzMn7C8Brvd5u4lLKNQuUxQZ9DkYXnaDruUcK0dp0yjZpIpVjp6Um3sclyu5I6PxdwL9EIIX4WCz4zowUup1ap6fHPqBx3jdlsUfdj2sPuFUd0EhxRGlWZjurFPSullbvLuZrxBGllIf0rkvG2uY+dLrYzgmtFe4gHdKr4pjqoiRNnZTUkS1ycHpIXu79M/K7UxLVbOwx1TYc1I6W86pRAe5SUyOfrSkqYIWklxsPcjXZbbsaOZQNZDyJ85cExZp6YVM/pL2wSSrBXedr3GUyqfOlAoblToe2M1PZvdLAy1WXfgDYV4nzl1SCu0u5rUxW6vwld8h9Qfv4aiCuLl5yebe7S7ktfAk8kg0SrjW0ZGY0OTAtPw93l7Lm0f8B4o/KB9wep6inZYFSd/6TVr8uqxuS4zlR09jRVeDtsgPetUACeNvkFkO3LXhZdr3mq/ayaHBafhRt7pbGrY34N1aGYRiGYRiGYRiGYRhGNkj8D8TRWzFSwIuLAAAAAElFTkSuQmCC"
                      />
                    </defs>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect width="40" height="40" fill="url(#pattern0)" />
                    <defs>
                      <pattern
                        id="pattern0"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_112_27"
                          transform="scale(0.0104167)"
                        />
                      </pattern>
                      <image
                        id="image0_112_27"
                        width="96"
                        height="96"
                        xlinkHref="data:image/png;base64,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"
                      />
                    </defs>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.footer__item}>
            <h3 className={styles.footer__title}>Phone Number</h3>
            <a href="tel:+99897 100 00 00">+99897 100 00 00</a>
          </div>
          <div className={styles.footer__item}>
            <h3 className={styles.footer__title}>Location</h3>
            <a href="#">Ahmad Donish 4, Tashkent, Uzbekistan.</a>
          </div>
          <div
            className={styles.footer__item}
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <h3 className={styles.footer__title}>
              Back to Top
              <svg
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.4884 0.939341C11.9026 0.353554 10.9529 0.353554 10.3671 0.939341L0.821133 10.4853C0.235346 11.0711 0.235346 12.0208 0.821133 12.6066C1.40692 13.1924 2.35667 13.1924 2.94245 12.6066L11.4277 4.12132L19.913 12.6066C20.4988 13.1924 21.4485 13.1924 22.0343 12.6066C22.6201 12.0208 22.6201 11.0711 22.0343 10.4853L12.4884 0.939341ZM12.9277 22L12.9277 2H9.92773L9.92773 22H12.9277Z"
                  fill="white"
                />
              </svg>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};