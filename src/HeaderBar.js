export default function HeaderBar() {
    return (
        // 2233ca
        <div id="HeaderBar" className="flex flex-col w-full font-['Koulen']">
            <div className="bg-[#002868] flex flex-col lg:flex-row justify-between w-full items-center p-3 lg:p-6">
                <a href={"/"} className="text-4xl text-white mb-3 lg:mb-0">FOR THE PEOPLE</a>
                <nav
                    className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center lg:items-start font-['League_Spartan']">
                    <a href="#" className="text-xl lg:text-2xl text-white hover:text-opacity-75">
                        Find my Reps
                    </a>
                    <a href="#" className="text-xl lg:text-2xl text-white hover:text-opacity-75">
                        How to Vote
                    </a>
                    <a href="#" className="text-xl lg:text-2xl text-white hover:text-opacity-75">
                        Recent Laws
                    </a>
                    <a href="#" className="text-xl lg:text-2xl text-white hover:text-opacity-75">
                        Issues
                    </a>
                    <a href="#" className="text-xl lg:text-2xl text-white hover:text-opacity-75">
                        About
                    </a>
                </nav>
            </div>
            <div className="bg-[#fc0000] w-full h-4"/>
        </div>
    )
}