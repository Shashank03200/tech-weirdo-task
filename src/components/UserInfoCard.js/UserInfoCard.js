import React from "react";
import { Skeleton, Card, Avatar } from "antd";

const { Meta } = Card;

function UserInfoCard(props) {
  const { userInfo, isLoading } = props;

  return (
    <Card style={{ width: "100%" }}>
      <Meta
        avatar={<Avatar src={userInfo.avatar_url} size="large" />}
        title={userInfo.login}
        description={userInfo.bio}
      />
    </Card>
  );
}

export default UserInfoCard;
