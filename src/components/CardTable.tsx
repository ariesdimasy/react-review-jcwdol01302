interface IPersonTable {
  username: string;
  email: string;
  phone: string;
  website: string;
}

export default function CardTable(props: IPersonTable) {
  const { username, email, phone, website } = props;

  return (
    <table>
      <tr>
        <td> Username </td>
        <td>: {username}</td>
      </tr>
      <tr>
        <td> Email </td>
        <td>: {email} </td>
      </tr>
      <tr>
        <td> Phone </td>
        <td>: {phone} </td>
      </tr>
      <tr>
        <td> Website </td>
        <td>: {website} </td>
      </tr>
    </table>
  );
}
