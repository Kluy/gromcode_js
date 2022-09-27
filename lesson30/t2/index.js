export const addImageV2 = url => {
  // put your code here
  const promise = new Promise((resolve, reject) => {
    addImage(url, reject);
  }) 
  return promise;
// };

// const addImage = (url, callback) => {
//   const img = document.createElement('img');
//   img.setAttribute('alt', 'User avatar');
//   img.src = url;

//   const pageElem = document.querySelector('.page');
//   pageElem.append(img);

//   const onImageLoaded = () => {
//     const { width, height } = img;
//     callback({ width, height });
//   };

//   const onImageLoadError = () => callback('Image load failed');

//   img.addEventListener('load', onImageLoaded);

//   img.addEventListener('error', onImageLoadError);
// };

addImageV2('https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg')
  .then(data => console.log(data)) // ==> { width: 200, height: 100 }
  .catch(error => console.log(error)); // ==> 'Image load failed'