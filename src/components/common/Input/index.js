import React from "react";

const Input = ({ id, message, label , icon , ...props  }) => {
  return (
    <div className="group z-0 form-field w-full relative">
      <input {...props} id={id} />
      {label && (
        <label
          htmlFor={id}
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-color peer-focus:dark:text-primary-color peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          {label}
        </label>
      )}
      {message && (
        <p className="mt-2 text-xs text-green-600 dark:text-green-400">
          <span className="font-medium">{message}</span>
        </p>
      )}
      {icon && 
        <span
          className="absolute right-2 top-0 cursor-pointer"
          onClick={props.onClick}
        >
          {icon}
        </span>
      }
    </div>
  );
};

export default Input;
