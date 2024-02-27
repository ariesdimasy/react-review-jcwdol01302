import IPerson from "../interfaces/IPerson";
import style from "./Card.module.css";
import CardTable from "./CardTable";

export default function Card(props: IPerson) {
  const { name, username, email, phone, website } = props;

  return (
    <div className={style.card}>
      <div className={style.title}>
        <h3>{name}</h3>
      </div>
      <div className={style.body}>
        <CardTable
          username={username}
          email={email}
          phone={phone}
          website={website}
        />
      </div>
    </div>
  );
}
