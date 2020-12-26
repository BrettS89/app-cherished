const url = env => {
  switch(env) {
    case 'LOCAL':
      // return 'http://localhost:4000'
      return 'http://4560a85b7e05.ngrok.io';

    case 'STAGING':
      return 'https://staging-api-cherished.herokuapp.com';

    case 'PROD':
      return 'https://prod-api-cherished.herokuapp.com';
  }
};

export default url('PROD');
