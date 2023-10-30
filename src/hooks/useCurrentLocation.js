import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setError, setLoading, setLocation } from '@/app/Redux/Features/currentLocation';

const useCurrentLocation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (process.browser && 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          dispatch(setLocation({ latitude, longitude }));
          dispatch(setLoading(false));
        },
        (error) => {
          dispatch(setError(error.message));
          dispatch(setLoading(false));
        }
      );
    } else {
      dispatch(setError('Geolocation is not supported by your browser.'));
      dispatch(setLoading(false));
    }
  }, []);
};

export default useCurrentLocation;
