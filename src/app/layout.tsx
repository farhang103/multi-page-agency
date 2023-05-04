import Header from "../components/Header";
import "./globals.css";
import { Jost } from "next/font/google";
import Footer from "../components/Footer";

export const metadata = {
    title: {
        default: "Designo",
        template: "%s | Designo",
    },
    description:
        "A Frontend Mentor challenge solution submitted by Ayoub Ahabchane",
};

const jost = Jost({
    variable: "--font-jost",
    display: "swap",
});

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${jost.className}`}>
            <body className="bg-[size:1006px_594px] bg-[position:top_475px_left,_right_bottom_475px] bg-no-repeat lg:bg-[url(../assets/shared/desktop/bg-pattern-leaf.svg),_url(../assets/exports/rectangle-right-aligned.svg)]">
                <Header />
                <main className="mb-[120px] grow md:mb-[80px] md:px-10 lg:mb-[160px]">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
