import React from "react";
import "./listproperty.css";
import { IoMdArrowDropdown } from "react-icons/io";

function Listproperty() {
  return (
    <div className="list-property-con">
      <div className="list-property">
        <section>
          <h1>What do you want to host?</h1>
          <br />
          <p>
            Do you want to host your house, yacht or vehicl? select your option
            below
          </p>
          <br />
          <span>Category</span>
          <div>
            <p>Select Option</p>
            <IoMdArrowDropdown size={20} />
          </div>
          <ul></ul>
        </section>
        <footer className="list-property-footer">
          <div>
            <button>Back</button>
            <button>Proceed</button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Listproperty;
