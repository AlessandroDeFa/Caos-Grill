import "./globals.css";
import { Cormorant } from "next/font/google";
import Header from "./components/header";
import Cursor from "./components/cursor";
import Footer from "./components/footer";
import ReduxProvider from "@/redux/provider";

const cormorant = Cormorant({ subsets: ["latin"] });

export const metadata = {
  title: "Cao's Grill",
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
