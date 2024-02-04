import {useNavigate} from "react-router-dom";

export default function Sidebar() {
    const navigate = useNavigate()
    return (
        <div
            id="SidebarRoot"
            className="flex flex-col items-center bg-[#d9d9d9] font-[League_Spartan] w-full h-full"
        >
            <h2 className="text-2xl font-bold text-[#030303] mt-10 mb-4">
                What’s Happening Near Me?
            </h2>
            <img
                src="https://file.rendit.io/n/P7SraWcllCgOKc3wdLgO.png"
                alt="BasemapImage"
                className="mb-4 w-5/6"
            />
            <div className="w-5/6 mb-4">
                <input
                    type="text"
                    placeholder="Enter your address"
                    className="text-xl text-[#847d7d] border-solid border-[#847d7d] shadow-md bg-white block w-full h-12 px-4 border-2 rounded"
                />
            </div>
            <button
                onClick={() => {navigator.geolocation.getCurrentPosition((position) => {
                });
                navigate('/representatives')
                }}
                className="w-5/6 h-12 bg-[#1e1e1e] text-white text-2xl flex justify-center items-center rounded"
            >
                Use my location
            </button>
            <div className="h-full">
                <div className="text-2xl font-bold text-[#030303] mt-10 mb-4">
                    Popular Topics
                </div>
                <div className="text-xl text-[#847d7d] mb-4">
                    <a href="#">COVID-19</a>
                </div>
                <div className="text-xl text-[#847d7d] mb-4">
                    <a href="#">Voting Rights</a>
                </div>
                <div className="text-xl text-[#847d7d] mb-4">
                    <a href="#">Climate Change</a>
                </div>
                <div className="text-xl text-[#847d7d] mb-4">
                    <a href="#">Healthcare</a>
                </div>
                <div className="text-xl text-[#847d7d] mb-4">
                    <a href="#">Gun Control</a>
                </div>
                <div className="text-xl text-[#847d7d] mb-4">
            </div>
        </div>
        </div>
    );
}