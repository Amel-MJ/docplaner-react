import React from "react";

function office(props) {
  return (
    <div>
      <section class="offices-header">
        <h1>Improve the lives of millions. Change&nbsp;yours forever </h1>
        <p>
          More than 1000 team mates share our same vision, goals and passion.
          With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and
          Curitiba, our search for great talent never stops.
        </p>
      </section>
      <section className="office-slider">
        {props.office.map(el => (
          <div className="office">
            <figure className="office_image">
              <img src={el.scr} />
            </figure>

            <div className="office_desc">
              <a href={el.href} className="office_inner">
                {el.ville}
              </a>
              <button type="button">{el.btn}</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
export default office;
