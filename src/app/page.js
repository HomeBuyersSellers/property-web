import { i18nConfig } from "@/i18n";
import { redirect } from "next/navigation";
const {defaultLocale} =i18nConfig
export default function RootPage() {
  return (
    redirect(`/${defaultLocale}/`)
  );
}