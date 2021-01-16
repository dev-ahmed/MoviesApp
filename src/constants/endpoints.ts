export const base_url: string = 'https://api.themoviedb.org/3';
export const api_key: string = 'cf643e307d468010399ded636371438d';

const endpoints = {
  SEARCH: base_url + '/search/movie',
  DETAILS: base_url + '/movie',
};

export {endpoints};
