const nameElem = document.querySelector('.user__name');
const avatarElem = document.querySelector('.user__avatar');
const locationElem = document.querySelector('.user__location');

export const renderData = (result) => {
  const {avatar_url, name, location} = result;
  avatarElem.src = avatar_url;
  nameElem.textContent = name;
  locationElem.textContent = location ? `from ${location}` : '';
}