

export const extractGalleryData = (contentData) => {
    let title = '';
    let images = [];
  
    data = contentData.find(component => component.__component === 'gallery.gallery-basic');

    if (data) {
      title = data.Title;
      images = data.Images.data.map(image => ({
          url: image.attributes.url,
      }));
    }
  
    return { title, images };
};