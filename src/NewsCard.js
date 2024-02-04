export default function NewsCard({ category, headline, imageSrc }) {
    return (
        <div id="PropertyDefaultRoot" className="flex flex-col w-full max-w-xs mx-auto items-center">
            <div className="bg-[#d9d9d9] flex flex-col justify-between w-full border-black border-2 font-['League_Spartan']">
                <div className="text-3xl font-['Koulen'] text-left py-2 w-full mx-5">
                    {category}
                </div>
                <img
                    src={imageSrc}
                    alt="News"
                    className="max-w-md mx-10 h-40 object-cover"
                />
                <div className="text-2xl font-bold p-4 text-left mx-6">
                    {headline}
                </div>
            </div>
        </div>
    );
}