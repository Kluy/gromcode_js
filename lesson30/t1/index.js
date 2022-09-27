export const addImage = imgSrc => {
  // put your code here
  const promise = new Promise((resolve, reject) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt','Image');
    imgElem.src = imgSrc;
    const pageElem = document.querySelector('.page');
    pageElem.append(imgElem);
    imgElem.addEventListener('load', () => {
      const {width, height} = imgElem;
      resolve({width, height});
    });
    imgElem.addEventListener('error', () => reject(new Error('Image load is failed')));
  }) 
  return promise;
};

const onSuccess = (data) => {
  const sizeElem = document.querySelector('.image-size');
  sizeElem.textContent = `${data.width} x ${data.height}`;
}

addImage('https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg')
.then(onSuccess, (error) => console.log(error));