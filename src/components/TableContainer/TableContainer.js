import React from "react";
// import { Table } from "antd";
import { Row, Col, Table } from "antd";
import Spinner from "../Spinner/Spinner";

import classes from "./Table.module.css";
import tableColumns from "./tableColumns";
import { Fade } from "react-reveal";
import UserInfoCard from "../UserInfoCard.js/UserInfoCard";

function TableContainer(props) {
  const { repos, isLoading, userInfo } = props;

  console.log("props", userInfo);

  const columns = tableColumns(classes);

  if (isLoading === true) {
    return <Spinner />;
  } else if (
    isLoading !== undefined &&
    repos !== undefined &&
    isLoading === false
  ) {
    return (
      <>
        <Fade bottom>
          <Row justify="center" className={classes.TableContainer__Wrapper}>
            <Col xs={24} sm={20} lg={12}>
              <UserInfoCard userInfo={props.userInfo} />
            </Col>
          </Row>

          <Row justify="center" className={classes.TableContainer__Wrapper}>
            <Col xs={23} sm={20} lg={12}>
              <Table
                columns={columns}
                dataSource={repos}
                className={classes.TableContainer__Table}
              />
            </Col>
          </Row>
        </Fade>
      </>
    );
  }
  return null;
}

export default TableContainer;
