import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { REST_API_KEY } from './Oauth';
import { API, REDIRECT_URI } from '../../config';
import Spinner from '../../components/Spinner/Spinner';

const Redirect = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get('code');

  useEffect(() => {
    fetch(
      `${API.getToken}id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;',
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        fetch(`${API.redirect}`, {
          method: 'POST',
          headers: {
            authorization: data.access_token,
          },
        })
          .then(res => res.json())
          .then(data => {
            if (data) {
              localStorage.setItem('token', data.accessToken);
              navigate(-3);
            }
          });
      });
  }, []);

  return <Spinner />;
};

export default Redirect;
