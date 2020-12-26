import api from '../lib/api';
import errorThrower from './errorThrower';

const uploadToS3 = async (url, file, type) => {
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': type,
    },
    body: file,
  });
  const response = await res.blob();
  errorThrower(res, response);
  return response;
};

const uploadPhoto = async uri => {
  const res = await fetch(uri);
  const blob = await res.blob();
  const fileType = blob.data.type;

  const data = await api.service('data/file').create({
    file_type: fileType,
  });

  await uploadToS3(data.url, blob, fileType);

  return data.key;
};

export default uploadPhoto;
