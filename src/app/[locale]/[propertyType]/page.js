import { unstable_setRequestLocale } from "next-intl/server";

export default async function Page({params}) {
const {locale, propertyType}= params
  unstable_setRequestLocale(locale);

  console.log(params,"PARAMS")

  return (
    <div className="property">
      
    </div>
  )
}