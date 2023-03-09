import StorageService from './core';

export const setTutorialViewed = async () => {
  await StorageService.setItem('tuto', true);
};

export const getStatusTutorialViewed = async () => {
  return (await StorageService.getItem('tuto')) || false;
};
