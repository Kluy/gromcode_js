import { addImage } from "./addImage.js";

const addImageV2 = url => {
  // put your code here
  const promise = new Promise((resolve, reject) => {
    addImage(url, resolve);
  }) 
  return promise;
};

addImageV2('https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg')
  .then(data => console.log(data)) // ==> { width: 200, height: 100 }
  .catch(error => console.log(error)); // ==> 'Image load failed'