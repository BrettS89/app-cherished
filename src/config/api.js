// import io from 'socket.io-client';
// import feathers from '@feathersjs/feathers';
// import socketio from '@feathersjs/socketio-client';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const socket = io('http://1bae4c8b0b04.ngrok.io', {
//   transports: ['websocket'],
//   forceNew: true
// });
// const client = feathers();

// client.configure(socketio(socket));

// const request = async (service, method, params={}) => {
//   const token = await AsyncStorage.getItem('token');
//   const fullParams = { ...params, query: { ...params.query, auth: token } };
  
//   return client.service(service)[method](fullParams);

// }

// export default request;
