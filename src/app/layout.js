import { Comic_Neue, Charm} from "next/font/google";
import "@/styles/index.scss"
import HomeNavbar from "@/components/common/navbar/home-navbar";
import Footer from "@/components/sule/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Inovaforce - Template-02",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${comicNeue.variable} ${charm.variable}`}>
      <body>
        <HomeNavbar/>
        {children}
       
        </body>
    </html>
  );
}