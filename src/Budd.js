import HeaderBar from "./HeaderBar";
import NewsSlider from "./NewsSlider";

export default function Budd() {
    return (
        <div className="App h-full">
            <header className="App-header">
                <link href="https://fonts.googleapis.com/css2?family=Koulen&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700&display=swap"
                      rel="stylesheet"/>
                <link href="./output.css" rel="stylesheet"/>
            </header>
        <HeaderBar/>
        <div className="flex h-full font-['Koulen'] text-8xl items-center justify-center my-5">
            Ted Budd's Recent Actions
        </div>
            <div>
                <NewsSlider/>
            </div>
        </div>


    )
}
