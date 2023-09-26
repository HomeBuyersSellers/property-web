import { unstable_setRequestLocale } from 'next-intl/server';
import React from 'react'

export default async function Resources({params:{locale}}){
  unstable_setRequestLocale(locale);

  return (
    <div>Resources</div>
  )
}
