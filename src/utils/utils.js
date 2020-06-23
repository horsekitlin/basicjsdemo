import isEmpty from 'lodash/isEmpty';
import { useEffect, useRef } from 'react';

export const getCustomerHeader = (authorization, others = {}) => {
  const { access_token } = authorization;
  return {
    ...others,
    Authorization: `bearer ${access_token}`
  };
};

export const getAuthorization = auth => ({
  access_token: auth.get('access_token'),
  refresh_token: auth.get('refresh_token'),
  expired: auth.get('expired')
});

export const menuActiveHelper = path => {
  const pathArray = path.split('/').filter(str => !isEmpty(str));
  const [first, second] = pathArray;

  const selectedKeys = isEmpty(second) ? [first] : [second];
  return {
    openKeys: [first],
    selectedKeys
  };
};

export function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
