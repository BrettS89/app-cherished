export default (res, response) => {
  const statusCode = res.status.toString()[0];
  if (statusCode === '4' || statusCode === '5')
    throw new Error(response.error);
};
