import React, { useEffect, useMemo } from "react";
import Button from "../../Button";
import Input from "../../Input";
import { useState } from "react";
import CustomSelect from "../../CustomSelect";
import { fetchCountriesData } from "@/utils/countriesData";
// import { auth, signInWithFacebook, signInWithGoogle } from "@/utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { saveUser, setLoading } from "@/app/Redux/Features/authSlice";
import OTPScreen from "@/components/OTPScreen";

const LoginModal = ({ closeModal }) => {
  const [phone, setPhone] = useState(null);
  const [countryData, setCountryData] = useState(null);
  const [countryOptions, setCountryOptions] = useState([]);
  const dispatch = useDispatch();
  const loading = useSelector((state)=>state.authUser.loading)
  const [showOtp,setShowOTP]=useState(false);
  const [email , setEmail]= useState()
  const [view, setView] = useState("phone");
 
  useEffect(() => {
    fetchCountriesData()
      .then((data) => {
        setCountryData(data.countries);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleGoogleSignIn = async () => {
    // dispatch(setLoading(true));
    // await signInWithGoogle();
    // dispatch(setLoading(false));
    
    // // After successful Google sign-in, you can perform the user data dispatch here.
    // const user = auth.currentUser; // Get the authenticated user
    // if (user) {
    //   const userData = {
    //     uid: user.uid,
    //     accessToken: user.UserImpl.accessToken,
    //     userName: user.UserImpl.displayName,
    //     email: user.UserImpl.email,
    //     phone: user.UserImpl.phone,
    //     profile: user.UserImpl.photoURL,
    //     lastLogin: new Date(),
    //   };
    //   dispatch(saveUser(userData));
    // }
    console.log("google Sign In")
  };
  useEffect(() => {
    const option = [];
    if (countryData) {
      countryData.map((country) => {
        option.push({
          label: `${country.dial_code} (${country.code})`,
          value: country.dial_code,
        });
      });
      setCountryOptions(option);
    } else {
      setCountryOptions([]);
    }
  }, [countryData]);

const handleOtp =()=>{
  setShowOTP(true);
}
const handleView =()=>{
  if(view === "phone"){
    setView("email")
    setShowOTP(false);
  }else if(view ==="email"){
    setView("phone")
    setShowOTP(false);
  }
}
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl lg:max-w-4xl md:max-w-2xl sm:max-w-6xl md:w-full w-full sm:w-full xs:w-full sm:my-8">
            <div className="close-icon text-right mt-2  px-2">
              <div className="flex justify-between align-center border-b-2">
                <h3
                  className="text-base font-medium leading-6 text-gray-900 text-start mb-1"
                  id="modal-title"
                >
                  Welcome to Property Web
                </h3>
                <i
                  className="ri-close-line text-lg cursor-pointer mb-1"
                  onClick={closeModal}
                ></i>
              </div>
            </div>
            <div className="flex h-96  w-full lg:space-x-4 xs:space-x-0 sm:space-x-0">
              <div className="hidden lg:block xs:block md:block sm:hidden md:w-3/5 lg:w-3/5 xl:w-3/5 bg-[#f7f7f7] p-2">
                <div className="max-w-lg mx-auto p-4">
                  <div className="relative">
                    <img
                      className="h-auto max-w-xs object-cover m-auto"
                      src="/images/loginModal.webp"
                      alt="login modal"
                    />
                  </div>
                  <p className="text-sm max-w-sm m-auto text-center mt-4">
                    View saved properties Keep search history across devices See
                    which properties you have contacted.
                  </p>
                </div>
              </div>
              <div className="w-full xs:w-full sm:w-full md:w-2/5 lg:w-2/5 xl:w-2/5 flex justify-center flex-col p-3 mx-[10px]">
              {showOtp ? (
                <OTPScreen sentTo={view === "phone" ? phone: email} view={view}/>
              ) : view === "phone" ? (
                <div className="mobile-login space-y-3 mb-2">
                  <div className="phone-input flex w-full items-end lg:space-x-2 sm:space-x-2">
                    <div className="flex-2 sm:flex-2 md:flex-2 relative">
                      {countryOptions.length && (
                        <CustomSelect
                          options={countryOptions}
                          defaultValue={countryOptions[228].label}
                        />
                      )}
                    </div>
                    <div className="flex-1 sm:flex-1 md:flex-1">
                      <Input
                        type="number"
                        onChange={(e) => setPhone(e.target.value)}
                        name="phone"
                        id="phone"
                        value={phone}
                        className="block font-medium py-[4px] px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 dark:placeholder-gray-400 placeholder-gray-400 dark:text-gray-600 dark:border-gray-600 dark:focus:border-primary-color focus:outline-none focus:ring-0 focus:border-primary-color"
                        placeHolder="Enter phone number"
                      />
                    </div>
                  </div>
                </div>
              ) : view === "email" ? (
                <div className="email-login space-y-3 mb-2">
                  <div className="email-input flex w-full flex-col space-y-5 items-end lg:space-x-2 sm:space-x-2">
                    <div className="w-full">
                      <Input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        id="email"
                        value={email}
                        className="block font-medium py-[4px] px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 dark:placeholder-gray-400 placeholder-gray-400 dark:text-gray-600 dark:border-gray-600 dark:focus:border-primary-color focus:outline-none focus:ring-0 focus:border-primary-color"
                        placeHolder="Enter your email"
                      />
                    </div>
                  </div>
                </div>
              ) : null}
              
              <Button
              variant="w-full bg-primary-color text-white rounded text-sm font-medium py-2 px-4"
              onClick={handleOtp}
            >
              {showOtp ? `Verify OTP` : `Continue`}
            </Button>
             
                <div className="separator-login relative"></div>
                <div className="flex flex-col space-y-2">
                  <Button variant="border border-primary-color py-2 px-4 w-full text-sm rounded text-primary-color font-medium" onClick={handleView}>
                    <div className="flex items-center text-start">
                      <img
                        src={view==='phone'?`/images/mail.svg`:`/images/phone.svg`}
                        width={20}
                        height={20}
                        className="mr-2"
                        alt="email"
                      />
                      Continue with {view==="phone" ? 'Email' :'Phone'}
                    </div>
                  </Button>
                  <Button
                    variant="border py-2 px-4 w-full text-sm rounded border-primary-color text-primary-color font-medium"
                    onClick={handleGoogleSignIn}
                  >
                    <div className="flex items-center text-start ">
                      <img
                        src="/images/google.svg"
                        width={20}
                        height={20}
                        className="mr-2"
                        alt="google"
                      />
                      {loading ? `Connecting...` : `Continue with Google`}
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
