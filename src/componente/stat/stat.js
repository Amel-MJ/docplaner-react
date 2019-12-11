import React from "react";

function stat(props) {
  return (
    <section className="stat">
      <div class="desc-stat">
        <h1>
          The world's <br /> biggest healthcare platform
        </h1>
        <p>
          We work from 6 offices all over the world, bringing Docplanner Group
          to life in almost 20 countries
        </p>
      </div>
      <div className="div-stat">
        {props.stat.map(el => (
          <div className="contenu-doctors" id={el.id}>
            <img src={el.scr} />
            <h3>{el.des}</h3>
            <p> {el.p} </p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default stat;
