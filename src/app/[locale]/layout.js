import { i18nConfig } from "@/i18n";
import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { createTranslator, NextIntlClientProvider } from "next-intl";
import Layout from "@/components/layout";
import { ReduxProvider } from "../Redux/provider";
const { locales } = i18nConfig;

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

async function getMessages(locale) {
  try {
    return (await import(`../../../dictionaries/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateMetadata({ params: { locale } }) {
  const messages = await getMessages(locale);
  const t = createTranslator({ locale, messages });
  return {
    title: t("Homepage.pageMeta.title"),
    description: t("Homepage.pageMeta.description"),
  };
}

function LocaleLayoutComponent({ children, locale, messages }) {
  console.log(messages, "messages");
  const header = messages && messages.Homepage && messages.Homepage.header;
  const footer = messages && messages.Homepage && messages.Homepage.footer;
  return (
    <html lang={locale}>
      <body suppressHydrationWarning={true}>
        <ReduxProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Layout header={header} footer={footer}>
              {children}
            </Layout>
          </NextIntlClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}

export default async function LocaleLayout({ children, params: { locale } }) {
  const { locales } = i18nConfig;
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) {
    notFound();
  }
  unstable_setRequestLocale(locale);

  // Load translation messages for the current locale
  const messages = await getMessages(locale);

  return (
    <LocaleLayoutComponent locale={locale} messages={messages}>
      {children}
    </LocaleLayoutComponent>
  );
}
