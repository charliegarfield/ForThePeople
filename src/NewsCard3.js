export default function NewsCard3({name, headline, summary}) {
    return (
        <div id="PropertyDefaultRoot" className="flex flex-col w-full max-w-xs mx-auto items-center">
            <div className="bg-[#d9d9d9] flex flex-col justify-between w-full border-black border-2 font-['League_Spartan']">
                <div className="font-['Koulen'] text-left py-2 w-full mx-5">
                    <p className="text-4xl"> {name}</p>
                </div>
                <div className="text-3xl font-bold p-4 text-left mx-6">
                    {headline}
                </div>
                <div className="text-lg p-4 text-left mx-6">
                    {summary}
                </div>
            </div>
        </div>
    );
}