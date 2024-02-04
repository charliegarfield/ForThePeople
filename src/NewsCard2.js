export default function NewsCard2({body, name, headline, imageSrc }) {
    return (
        <div id="PropertyDefaultRoot" className="flex flex-col w-full max-w-xs mx-auto items-center">
            <div className="bg-[#d9d9d9] flex flex-col justify-between w-full border-black border-2 font-['League_Spartan']">
                <div className="font-['Koulen'] text-left py-2 w-full mx-5">
                    <p className="text-xl text-gray-500"> {body}</p>
                    <p className="text-3xl"> {name}</p>
                </div>
                <img
                    src={imageSrc}
                    alt="News"
                    className="max-w-md mx-10 h-80 object-cover"
                />
                <div className="text-2xl font-bold p-4 text-left mx-6">
                    {headline}
                </div>
            </div>
        </div>
    );
}