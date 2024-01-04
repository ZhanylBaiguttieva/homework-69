import {NavLink} from "react-router-dom";


const ToolBar = () => {
    return (
        <div>
          <nav className="navbar  bg-body-tertiary">
              <div className='container-fluid'>
                  <NavLink className="navbar-brand" to='/'>Movie</NavLink>
              </div>
          </nav>
        </div>
    );
};

export default ToolBar;