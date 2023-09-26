import { i18nConfig } from "@/i18n";
import { unstable_setRequestLocale } from "next-intl/server";
import NotFound from "./not-found";
import RootLayout from "../layout";
import Layout from "@/components/layout";
const { locales } = i18nConfig;
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export default async function LocaleLayout({ children,  params: { locale } }) {
  const { locales } = i18nConfig;
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) NotFound();
  unstable_setRequestLocale(locale);
  return (
    <Layout>
          {children}
    </Layout>
  );
}
