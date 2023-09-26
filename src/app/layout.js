import { ReduxProvider } from "./Redux/provider";
import "./globals.css";
export default function RootLayout({ children, lang }) {
  return (
    <html lang={lang}>
      <body suppressHydrationWarning={true}>
          <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
