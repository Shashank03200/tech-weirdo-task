import React from "react";
import { Input } from "antd";

import classes from "./InputForm.module.css";

const { Search } = Input;

function InputForm(props) {
  return (
    <div style={{ marginTop: "4rem" }}>
      <Search
        name="username"
        placeholder="Enter a username"
        enterButton
        onSearch={props.onSearch}
        loading={props.isLoading}
        autoComplete="off"
        size="large"
      />
    </div>
  );
}

export default InputForm;
