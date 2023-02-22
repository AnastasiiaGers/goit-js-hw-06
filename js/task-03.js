const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const gallery = document.querySelector(".gallery");
const imgGallery = images.map(img => {
    const elemImg = document.createElement('img');
    const imgLi = document.createElement('li');
    elemImg.src = img.url;  
    elemImg.alt = img.alt;
    imgLi.append(elemImg);
    return imgLi;
});
gallery.append(...imgGallery);

const imgEll = images.map(({ url, alt }) => {
  return `<li><img class = 'item-foto' alt = '${alt}'; src='${url}' width = 320px;></li>`;
}).join('');

console.log(imgEll);

gallery.insertAdjacentHTML('beforeend', `$(imgEll)`);

