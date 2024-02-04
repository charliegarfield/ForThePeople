import NewsCard from "./NewsCard";

export default function NewsFeed() {
    return (
        <div className="flex justify-around items-center w-full">
            <NewsCard
                category="Local"
                headline="North Carolina Legislators Pass New Gerrymandered Maps"
                imageSrc="https://file.rendit.io/n/ElUjP0zMVDRtKd2IhcPi.png"
            />
            <NewsCard
                category="Federal"
                headline="Bipartisan Tax Bill Passes House; Yet to Pass Senate"
                imageSrc="https://i.ibb.co/WVMmqr7/Speaker-Mike-Johnson-Sworn-In.png"
            />
            <NewsCard
                category="Executive"
                headline="Biden Sanctions West Bank Settlers in New Executive Order"
                imageSrc="https://i.ibb.co/kBgf71x/ap24032524011292.jpg"
            />
        </div>
    );
}