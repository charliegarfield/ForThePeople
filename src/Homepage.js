import './App.css';
import './NewsCard.js'
import NewsFeed from "./NewsFeed";
import HeaderBar from "./HeaderBar";
import Sidebar from "./Sidebar";
import {useNavigate} from "react-router-dom";

export default function Homepage() {
    return (
      <div className="App h-full">
          <header className="App-header">
              <link href="https://fonts.googleapis.com/css2?family=Koulen&display=swap" rel="stylesheet"/>
              <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700&display=swap"
                    rel="stylesheet"/>
              <link href="./output.css" rel="stylesheet"/>
          </header>
          <HeaderBar/>
          <div className="flex h-full">
              <div className="w-3/4">
                  <div id={"TopText"} className={"text-left text-black font-league-spartan mx-14 my-8"}>
                      <div className={"text-3xl text-black"}>
                          <b>What are my representatives doing?</b>
                      </div>
                  </div>
                  <NewsFeed/>
                  <div id={"BottomText"} className="text-left text-black font-league-spartan mx-14 my-8">
                      <div className="text-3xl text-black">
                          <b>Keeping up with Legislation</b>
                      </div>
                      <div className="text-xl text-black">
                          Have you ever wondered how to keep up with what’s going on at the city, state,
                          and federal levels? For the People can help. Using AI technology, we can tell you about what
                          each of your representatives has been up to, and provide summaries of their votes on issues
                          that you’re interested in, without the bias.
                      </div>

                    </div>
                </div>

              <div className="w-1/4 h-full">
                  <Sidebar/>
              </div>
          </div>
      </div>
  );
}
