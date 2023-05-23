import React from "react";
import './App.css';

function Form() {
    return (
        <form className="form-container">
          <label className="form-label">
            Name:
            <input type="text" className="form-input" />
          </label>
          <label className="form-label">
            Email:
            <input type="email" className="form-input" />
          </label>
          <label className="form-label">
            Message:
            <textarea className="form-textarea" />
          </label>
          <button type="submit" className="form-button">Submit</button>
        </form>
      );
    };
    export default Form
