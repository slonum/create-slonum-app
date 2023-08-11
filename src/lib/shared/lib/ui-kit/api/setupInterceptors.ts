import { AxiosInstance } from 'axios';

export const setupInterceptors = (
  store,
  axiosInstance: AxiosInstance,
  refresh: () => any,
) => {
  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;

      if (err.response) {
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;
          const isLogout = originalConfig.url.includes('logout');

          try {
            const { dispatch } = store;
            const res = await dispatch(refresh());

            if (isLogout && res && res.payload) {
              originalConfig.data = JSON.stringify({
                refreshToken: res?.payload?.refreshToken,
              });
            }

            return axiosInstance(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }

      return Promise.reject(err);
    },
  );
};

export default setupInterceptors;
