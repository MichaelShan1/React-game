import noimage from '../assets/no-image-placeholder-6f3882e0.webp';
const optimizeImage = (url: string) => {
  if (!url) {
    return noimage;
  }
  // index of starting positon of media
  const index = url.indexOf('media/') + 'media/'.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};
export default optimizeImage;
