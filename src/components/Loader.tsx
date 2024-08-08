import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 z-10 flex items-center justify-center backdrop-blur-sm">
      <InfinitySpin width="200" color="#2196f3" />
    </div>
  );
};

export default Loader;
