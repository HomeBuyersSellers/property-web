function Button({ children, variant, onClick }) {
    // Define Tailwind CSS classes based on the variant prop
    const buttonClasses = `py-1 px-4  focus:outline-none transition duration-300 capitalize ${variant}`;
  
    return (
      <button className={buttonClasses} onClick={onClick}>
        {children}
      </button>
    );
  }
  
  export default Button;
  