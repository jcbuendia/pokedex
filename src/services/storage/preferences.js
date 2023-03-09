import StorageService from './core';

export const setLanguage = async (language) => {
  await StorageService.setItem('language', language);
};

export const getLanguage = async () => {
  return await StorageService.getItem('language');
};
