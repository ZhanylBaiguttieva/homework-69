import Form from "../components/Form";
import {Outlet} from "react-router-dom";


const Home = () => {
    return (
        <div>
            <Form/>
            <Outlet/>
        </div>
    );
};

export default Home;