import React from "react";

function Button() {
  return (
    <div className="flex-btn">
      <button>
        <span>
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </span>
        <p>Back</p>
      </button>
      <button>
        <p>Close</p>
        <span>
          <i className="fa fa-times" aria-hidden="true"></i>
        </span>
      </button>
    </div>
  );
}

export default Button;
