import React from "react";
import { Row, Col } from "antd";

import classes from "./InputContainer.module.css";

function InputContainer(props) {
  return (
    <Row justify="center" className={classes.InputContainer_Wrapper}>
      <Col xs={20} sm={14} md={12} lg={10}>
        {props.children}
      </Col>
    </Row>
  );
}

export default InputContainer;
