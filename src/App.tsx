
import './App.css';
import {Route, Routes} from "react-router-dom";
import NotFound from "./components/NotFound";
import ToolBar from "./components/ToolBar";
import Home from "./containers/Home";
import InfoMovie from "./containers/infoMovie";

function App() {


  return (
    <>
        <header>
            <ToolBar/>
        </header>
        <main>
            <Routes>
                <Route path='/' element={<Home/>}>
                    <Route path='/shows/:id' element={<InfoMovie/>}></Route>
                </Route>
                <Route path='*' element={<NotFound/>}></Route>
            </Routes>
        </main>
    </>
  );
}

export default App;
