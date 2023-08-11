import axios from 'axios';
import { getAccesToken, getRefreshToken } from '../../utils/cookie';

export const isServer = !!process.env.NEXT_PUBLIC_URL;
export const BASE_URL = process.env.NEXT_PUBLIC_URL || 'http://localhost';

export const isDev =
  process.env.NEXT_PUBLIC_NODE === 'development' ||
  process.env.NX_NODE === 'development';

export const isProduction = !isDev;

const CABINET_URL = isDev ? 'dev-lk.slonum.ru' : 'lk.slonum.ru';

const DRAW_URL = isDev ? 'dev-draw.slonum.ru' : 'draw.slonum.ru';

const WORDS_URL = isDev ? 'dev-words.slonum.ru' : 'words.slonum.ru';

const ENGLISH_URL = isDev ? 'dev-english.slonum.ru' : 'english.slonum.ru';

const OLYMP_MATH = isDev ? 'dev-math-olymp.slonum.ru' : 'math-olymp.slonum.ru';

const ADMIN_PANEL = isDev ? 'dev-admin.slonum.ru' : 'admin.slonum.ru';

const BLOG_URL = isDev ? 'dev-blog.slonum.ru' : 'blog.slonum.ru';

const MAIN_URL = isDev ? 'https://dev.slonum.ru' : 'https://slonum.ru';

export const MAIN = isServer ? MAIN_URL : `${BASE_URL}:8088`;

const FRACTION_URL = isDev
  ? 'https://dev-fraction.slonum.ru'
  : 'https://fraction.slonum.ru';

export const DRAWING_COMPETITION = isServer
  ? `https://${DRAW_URL}`
  : `${BASE_URL}:8080`;

export const DICTIONARY_WORDS = isServer
  ? `https://${WORDS_URL}`
  : `${BASE_URL}:8081`;

export const CABINET = isServer ? `https://${CABINET_URL}` : `${BASE_URL}:8082`;

export const ENGLISH_WORDS = isServer
  ? `https://${ENGLISH_URL}`
  : `${BASE_URL}:8083`;

export const OLYMPIAD_MATH = isServer
  ? `https://${OLYMP_MATH}`
  : `${BASE_URL}:8084`;

export const ADMIN_URL = isServer
  ? `https://${ADMIN_PANEL}`
  : `${BASE_URL}:8085`;

export const ARTICLES = isServer
  ? `https://${ADMIN_PANEL}/blog/articles`
  : `${BASE_URL}:8085/blog/articles`;

export const BANNERS = isServer
  ? `https://${ADMIN_PANEL}/blog/banner`
  : `${BASE_URL}:8085/blog/banner`;

export const OLYMPIAD_URL = `${BASE_URL}${isServer ? '' : ':3017'}/olympiads`;

export const BLOG_LINK = isServer ? `https://${BLOG_URL}` : `${BASE_URL}:8086`;

export const FRACTION = isServer ? FRACTION_URL : `${BASE_URL}:8087`;

export const HELP_THE_PROJECT = `${MAIN}/donation`;

const AXIOS_HTTP = axios.create({
  // baseURL: '',
  withCredentials: false,
});

AXIOS_HTTP.interceptors.request.use(
  /* @ts-ignore */
  (config) => {
    let authHeaders = {};
    const isRefresh =
      config.url.includes('refresh') || config.url.includes('logout');
    const token = isRefresh ? getRefreshToken() : getAccesToken();

    if (token) {
      authHeaders = {
        Authorization: `Bearer ${token}`,
      };
    }

    return {
      ...config,
      headers: {
        ...authHeaders,
      },
    };
  },
  (error: any) => {
    Promise.reject(error);
  },
);

AXIOS_HTTP.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    return Promise.reject(error);
  },
);

export default AXIOS_HTTP;
