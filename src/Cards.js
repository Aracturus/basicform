import React from "react";

const Cards = (props) => {
  return (
    <>
      <h1 className="display-3 text-center text-capitalize mt-lg-4 mb-lg-3">
        Cards
      </h1>
      <div className="container-fluid">
        <div className="col-md-10 mx-auto">
          <div className="row d-flex flex-wrap mx-auto">
            {props.cards.map((values, index) => {
              return (
                <>
                  <div className="card-container mx-auto gy-4" key={index}>
                    <h6>{values.id}</h6>
                    <h4 className="card-title pb-lg-1">{values.title}</h4>
                    <h4 className="card-body">{values.body}</h4>
                  </div>
                  ;
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
