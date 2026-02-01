import Header from "./_components/Header";
import Navigation from "./_components/Navigation";
import "./_styles/globals.css";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin-ext"],
  display: "swap",
});

// for metadata
export const metadata = {
  // %s is getting replaced by page metatag which we exported
  title: {
    template: "%s the Wild Oasis",
    default: "The Wild Oasis",
  },
  //meta tag
  description:
    "Luxurious cabin hotels located in the heart of Italian Dolomites",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${josefin.className} bg-primary-950 antialiased text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className=" flex-1 px-8 py-12 grid">
          <main className=" max-w-7xl  mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
