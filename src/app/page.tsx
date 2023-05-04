import Hero from "../components/home/Hero";
import Qualities from "../components/home/Qualities";
import Services from "../components/home/Services";

export default function Home() {
    return (
        <div className="pageWrapper flex w-full flex-col gap-[120px] md:gap-[160px]">
            <Hero />
            <Services />
            <Qualities />
        </div>
    );
}
