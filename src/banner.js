export const addBanner = (text = 'Look at this banner!') => {
  document.querySelector('#content').textContent = text;
}

export const removeBanner = () => {
  document.querySelector('#content').textContent = '';
}
