export const mapProduct = (values) => {
  console.log(values);
  const mappedProduct = {
    id: values._id,
    description: values.description,
    title: values.title,
    images: values.pictures?.map((img) => ({
      index: img.index,
      url: img.img
    })),
    store: values.store,
    date: values.createdAt,
    beaconId: values.beacon_id,
    url: values.url
  };

  return mappedProduct;
};

export const routesObject = {
  home: 'content/mobile/get',
  beacon: 'beacon/mobile/get'
};
