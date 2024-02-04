import HeaderBar from "./HeaderBar";
import RepresentativesSlider from "./RepresentativeSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function RepresentativesPage() {
    return (
        <div id="RepresentativesPage" className="w-full">
            <header className="App-header">
                <link href="https://fonts.googleapis.com/css2?family=Koulen&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700&display=swap"
                      rel="stylesheet"/>
                <link href="./output.css" rel="stylesheet"/>
            </header>
            <HeaderBar/>
            <div className="flex h-full font-['Koulen'] text-8xl items-center justify-center my-5">
            My Representatives
            </div>
            <div className="h-full mt-10">
                <RepresentativesSlider/>
            </div>

        </div>
    )
}