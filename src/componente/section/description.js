import React from "react";

function description(props) {
  return (
    <section className="doctors">
      <img
        className="lead__logo"
        src="https://www.docplanner.com/img/sygnet.png"
        srcset="https://www.docplanner.com/img/sygnet.png 1x, https://www.docplanner.com/img/sygnet@2x.png 2x"
      />
      <h1> Making the healthcare experience more human </h1>
      <div className="grid">
        {props.desc.map(el => (
          <p> {el.parg} </p>
        ))}
      </div>
    </section>
  );
}
export default description;
