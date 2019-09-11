export const photosUnknown = [];

export const photos2007 = [
  "http://kramaai.be/images/photoalbum/album_6/1.jpg",
  "http://kramaai.be/images/photoalbum/album_6/2.jpg",
  "http://kramaai.be/images/photoalbum/album_6/3.jpg",
  "http://kramaai.be/images/photoalbum/album_6/4.jpg",
  "http://kramaai.be/images/photoalbum/album_6/5.jpg",
  "http://kramaai.be/images/photoalbum/album_6/6.jpg",
  "http://kramaai.be/images/photoalbum/album_6/7.jpg",
  "http://kramaai.be/images/photoalbum/album_6/8.jpg",
  "http://kramaai.be/images/photoalbum/album_6/9.jpg",
  "http://kramaai.be/images/photoalbum/album_1/1.jpg",
  "http://kramaai.be/images/photoalbum/album_1/10.jpg",
  "http://kramaai.be/images/photoalbum/album_1/11.jpg",
  "http://kramaai.be/images/photoalbum/album_1/12.jpg",
  "http://kramaai.be/images/photoalbum/album_1/13.jpg",
  "http://kramaai.be/images/photoalbum/album_1/14.jpg",
  "http://kramaai.be/images/photoalbum/album_1/15.jpg",
  "http://kramaai.be/images/photoalbum/album_1/16.jpg",
  "http://kramaai.be/images/photoalbum/album_1/17.jpg",
  "http://kramaai.be/images/photoalbum/album_1/18.jpg",
  "http://kramaai.be/images/photoalbum/album_1/19.jpg",
  "http://kramaai.be/images/photoalbum/album_1/2.jpg",
  "http://kramaai.be/images/photoalbum/album_1/20.jpg",
  "http://kramaai.be/images/photoalbum/album_1/21.jpg",
  "http://kramaai.be/images/photoalbum/album_1/22.jpg",
  "http://kramaai.be/images/photoalbum/album_1/23.jpg",
  "http://kramaai.be/images/photoalbum/album_1/24.jpg",
  "http://kramaai.be/images/photoalbum/album_1/25.jpg",
  "http://kramaai.be/images/photoalbum/album_1/26.jpg",
  "http://kramaai.be/images/photoalbum/album_1/27.jpg",
  "http://kramaai.be/images/photoalbum/album_1/28.jpg",
  "http://kramaai.be/images/photoalbum/album_1/29.jpg",
  "http://kramaai.be/images/photoalbum/album_1/3.jpg",
  "http://kramaai.be/images/photoalbum/album_1/30.jpg",
  "http://kramaai.be/images/photoalbum/album_1/33.jpg",
  "http://kramaai.be/images/photoalbum/album_1/34.jpg",
  "http://kramaai.be/images/photoalbum/album_1/4.jpg",
  "http://kramaai.be/images/photoalbum/album_1/5.jpg",
  "http://kramaai.be/images/photoalbum/album_1/7.jpg",
  "http://kramaai.be/images/photoalbum/album_1/8.jpg",
  "http://kramaai.be/images/photoalbum/album_1/9.jpg",
  "http://kramaai.be/images/photoalbum/album_1/13.jpg",
  "http://kramaai.be/images/photoalbum/album_1/dsc00580.jpg",
  "http://kramaai.be/images/photoalbum/album_1/dsc01629.jpg",
  "http://kramaai.be/images/photoalbum/album_1/dsc01630.jpg"
];

export const photos2008 = [
  "http://kramaai.be/images/photoalbum/album_18/2012.jpg",
  "http://kramaai.be/images/photoalbum/album_18/2013.jpg",
  "http://kramaai.be/images/photoalbum/album_18/2014.jpg",
  "http://kramaai.be/images/photoalbum/album_18/2015.jpg",
  "http://kramaai.be/images/photoalbum/album_18/2016.jpg",
  "http://kramaai.be/images/photoalbum/album_18/2017.jpg",
  "http://kramaai.be/images/photoalbum/album_18/2022.jpg",
  "http://kramaai.be/images/photoalbum/album_18/2042.jpg"
];

const calculationBullingen = () => {
  let photos2019 = [];
  for (let i = 1; i <= 355; i++) {
    photos2019.push(
      "http://kramaai.be/images/bullingen2019/B%C3%BCllingen%202019-" +
        i +
        ".jpg"
    );
  }
  return photos2019;
};

export const photos2019 = calculationBullingen();
