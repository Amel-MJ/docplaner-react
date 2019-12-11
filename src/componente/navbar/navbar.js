import React from "react";

function navbar(props) {
  return (
    <header>
      <nav className="nav">
        <a href="">
          <img
            className="logo-docplanner"
            src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
            alt="Docplanner Group"
          />
        </a>

        <div className="menu">
          <ul className="main-menu">
            {props.x.map(el => (
              <li key={el.id} className="dropdown">
                {" "}
                <a className="dropbtn">{el.title}</a>
                {!el.drop ? null : (
                  <div class="dropdown-content">
                    <ul className="sous-menu">
                      {el.drop.map(el => (
                        <li key={el.id}>
                          <a className="dropbtn" href={el.url}>
                            {" "}
                            {el.title}{" "}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default navbar;
