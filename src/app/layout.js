import "./globals.css";
import { Cormorant } from "next/font/google";
import Header from "./components/header";
import Cursor from "./components/cursor";
import Footer from "./components/footer";
import ReduxProvider from "@/redux/provider";

const cormorant = Cormorant({ subsets: ["latin"] });

export const metadata = {
  title: "Cao's Grill",
  description:
    "Benvenuti al Cao's Grill: Dove le grigliate succulente, le pizze artigianali, le prelibatezze di carne e i dolci irresistibili si fondono in un'esperienza culinaria unica. Scopri i sapori autentici e lasciati tentare dalla nostra passione per il cibo.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cormorant.className}>
        <ReduxProvider>
          <Cursor />
          <Header />

          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
