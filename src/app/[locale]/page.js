import Grid from '@/components/Grid';
import { unstable_setRequestLocale } from 'next-intl/server';

export default async function Home({ params: {locale}}) {
  unstable_setRequestLocale(locale);
  return (
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <Grid locale={locale}/>
      </div>
  )
}
