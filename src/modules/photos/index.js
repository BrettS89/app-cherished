import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import View from './view';

const Photos = () => {
  const photos = useSelector(state => state.content.photos);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <View
      photos={photos}
      selectedPhoto={selectedPhoto}
      setSelectedPhoto={setSelectedPhoto}
    />
  )
};

export default Photos;
