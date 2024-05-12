import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Recipes message board",
  description: "Add and comment on messages ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          On the eight day he created a header, but didn&apos;t have time to
          style it{" "}
        </header>

        {children}

        <footer>
          On the ninth day he created a footer, but didn&apos;t have time to
          style it
        </footer>
      </body>
    </html>
  );
}
