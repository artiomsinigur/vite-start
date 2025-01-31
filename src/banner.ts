import styles from './banner.module.css';

const bannerElement = document.querySelector('#content') as HTMLDivElement;
bannerElement.classList.add(styles.banner);

export const addBanner = (text = 'Look at this banner!') => {
  bannerElement.textContent = text;
};

export const removeBanner = () => {
  bannerElement.textContent = '';
};
