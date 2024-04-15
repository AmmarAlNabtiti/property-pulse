'use client';
import { ClipLoader } from 'react-spinners';
const override = {
  display: 'block',
  margin: '100px auto',
};
function Spinner({ loading }) {
  return (
    <ClipLoader
      color={'#1d4ed8'}
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default Spinner;
