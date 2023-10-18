export const Icon = {
  Eye: (
    <img
      src="/images/eye.svg"
      className="m-2"
      width={15}
      height={15}
      alt="email"
    />
  ),
  EyeClose: (
    <img
      src="/images/eye-slash.svg"
      width={15}
      height={15}
      className="m-2"
      alt="email"
    />
  ),
  SearchIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-search w-5 h-5 absolute top-4 left-2 -translate-y-1/2 start-4 text-primary-color"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />,
    </svg>
  ),
  MapPin:(
    <img src="/images/pin-location.svg" 
    height={30} width={30}
    alt="location-pin"/>
  )
};
