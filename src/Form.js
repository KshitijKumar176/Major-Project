import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Form.css";

function Form() {
  const [voted, setVoted] = useState(false);
  const [party, setParty] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();

    console.log(e.target);

    dispatch({
      type: "VOTED",
      payload: {
        voted: true,
        party: party,
      },
    });

    navigate("/");
  };

  const handleChange = (e) => {
    e.preventDefault();

    console.log(e.target.value);

    setParty(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e);
  };
  return (
    <form>
      <div className="row">
        <div className="col-md-6">
          <div className="form-check m-3">
            <label className="select" for="slct">
              <select
                id="slct"
                className="form__select"
                value={party}
                onChange={handleChange}
              >
                <option value="">Choose to vote</option>
                <option value="Party1">Party1</option>
                <option value="Party2">Party2</option>
                <option value="Party3">Party3</option>
                <option value="NOTA">NOTA</option>
              </select>
              {/* <svg>
                <use xlink:href="#select-arrow-down"></use>
              </svg> */}
            </label>
          </div>
        </div>
      </div>

      <button
        className="form__button"
        type="submit"
        disabled={party === ""}
        onClick={submitForm}
      >
        CONFIRM
      </button>
    </form>
  );
}

export default Form;
