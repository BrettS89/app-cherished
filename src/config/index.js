const url = env => {
  switch(env) {
    case 'LOCAL':
      // return 'http://localhost:4000'
      return 'http://ac37fb2031d5.ngrok.io';

    case 'STAGING':
      return 'tbd';

    case 'PRODUCTION':
      return 'tbd';
  }
};

export default url('LOCAL');
