import axios from 'axios';
import log from 'loglevel';

export default {
  setupInterceptors: (store) => {
    log.debug('Store is', store);
    axios.interceptors.request.use((req) => {
      log.debug('Store is', req);
      return req;
    });

    axios.interceptors.response.use(
      (res) => {
        log.debug('Response in interceptor is :', res);
        return res;
      },
      (err) => {
        log.error('Error from interceptor is', err);
        return err;
      },
    );
  },
};
