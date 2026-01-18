import Navigation from "./components/Navigation";

// for metadata
export const metadata = {
  title: "The Wild",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <footer>Copyright MINE</footer>
      </body>
    </html>
  );
}
