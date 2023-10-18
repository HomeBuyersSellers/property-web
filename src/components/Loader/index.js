import Image from "next/image";

// loader component
const Loader = () => {
  return (
    <div className="loading-container h-screen flex items-center justify-center">
       <div className="w-16 h-16 border-t-4 border-primary-color border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
