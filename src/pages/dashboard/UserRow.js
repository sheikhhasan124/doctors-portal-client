import React from "react";

const UserRow = ({user}) => {
  const {_id,email}=user;
  return (
    <tr>
      <th>{_id + 1}</th>
      <td>{email}</td>
      <td>Quality Control Specialist</td>
      <td>Blue</td>
    </tr>
  );
};

export default UserRow;
