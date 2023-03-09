import StorageService from './core';

export const setToken = async (token) => {
  await StorageService.setItem('token', token);
};

export const getToken = async () => {
  return await StorageService.getItem('token');
};

export const deleteToken = async () => await StorageService.deleteItem('token');
