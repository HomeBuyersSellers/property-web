import React from 'react';
import { useRouter } from 'next/router';

export default function LanguageSwitcher() {
  const router = useRouter();

  const handleLanguageChange = (locale) => {
    router.push('/', locale);
  };

  return (
    <select onChange={(e) => handleLanguageChange(e.target.value)}>
      <option value="en">English</option>
      <option value="ar">Arabic</option>
    </select>
  );
}