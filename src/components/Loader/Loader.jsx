import { ColorRing } from 'react-loader-spinner';
export const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#310ecdb7', '#4340ef', '#6a92f8', '#ecf412', '#f9f94b']}
    />
  );
};