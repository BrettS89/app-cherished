import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import throwError from '../utilities/errorThrower';
import URI from '../config/index';

class Api {
  constructor() {
    this.service_name = null;
  }

  service(service) {
    this.service_name = service;
    return this;
  }

  validServiceCheck() {
    if (!this.service || typeof this.service_name !== 'string') {
      throw new Error('Must call method on valid service');
    }
  }

  throwError({ status }, { message }) {
    const statusCode = status.toString()[0];
    if (statusCode === '4' || statusCode === '5')
      throw new Error(message);
  }

  async getToken() {
    const token = await AsyncStorage.getItem('token');
    return token || null;
  }

  async create(body) {
    this.validServiceCheck();
    const service_name = this.service_name;

    const res = await fetch(`${URI}/${service_name}`, {
      method: 'POST',
      headers: {
        authorization: await this.getToken(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const response = await res.json();
    throwError(res, response);

    this.service_name = null;
    return response.data;
  }

  async find(params={}) {
    this.validServiceCheck();

    const skip = params.skip ?? 0;
    const limit = Number(params.limit) ?? 20;
    const sortBy = params.sortBy ?? '_id';
    const sort = params.sort === -1 ? -1 : 1;
    const service_name = this.service_name
    const token = await this.getToken();

    let requestString = `${URI}/${service_name}?skip=${skip}&limit=${limit}&sortBy=${sortBy}&sort=${sort}`;

    Object.entries(params).forEach(([key, value]) => requestString+= `&${key}=${value}`);

    const { data } = await axios.get(requestString, {
      headers: {
        authorization: token,
      }
    });

    this.service_name = null;
    return data;
  }

  async get(_id) {
    this.validServiceCheck();
    if (!_id || typeof _id !== 'string') {
      throw new Error('Please provide a valid id');
    }

    const service_name = this.service_name;
    const { data } = await axios.get(`${URI}/${service_name}/${_id}`);
    this.service_name = null;
    return data;
  }

  async patch(id, body) {
    this.validServiceCheck();
    
    const service_name = this.service_name;

    const res = await fetch(`${URI}/${service_name}/${id}`, {
      method: 'PATCH',
      headers: {
        authorization: await this.getToken(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const response = await res.json();
    throwError(res, response);

    this.service_name = null;
    return response.data;
  }

  async delete() {}

}

export default new Api();
