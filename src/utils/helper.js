import { useRef } from 'react';

export const useDebounce = (func, delay) => {
  const timeoutId = useRef(null);

  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timeoutId.current);

    timeoutId.current = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

export default function cleanPathname(url) {
  const pathName = url.split('/');
  const cleanPath = pathName.filter((segment) => segment !== "");
  return cleanPath;
}

export async function getSinglePageDetail() {
  try {
    const data = await import(`/JSON/property.json`);
    return data.default;
  } catch (error) {
    console.error('Error fetching properties:', error);
    return [];
  }
}