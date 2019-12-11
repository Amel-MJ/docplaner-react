import React from "react";

function marketplace(props) {
  return (
    <section className="patients">
      {props.person.map((el, i) => (
        <div className={i === 0 ? "marketplace" : "visible"}>
          <h2>{el.name}</h2>
          <h1>{el.des}</h1>
          <div class="marketplace-content">
            {!el.option ? null : (
              <select id="domain-switcher">
                {el.option.map(e => (
                  <option>{e}</option>
                ))}
              </select>
            )}
            <img className={el.style} src={el.src} />
          </div>
        </div>
      ))}
    </section>
  );
}
export default marketplace;
