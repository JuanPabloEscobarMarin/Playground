import Image from "next/image";
import { Badge } from "./components/Badge";
import { Button } from "./components/Button";
import { Card } from "./components/Card";

export default function Home() {
  return (
    <>
      <Badge text="Nuevo"></Badge>
      <Button text="Boton" href="www.google.com" type="sexo"></Button>
      {/* <Card
        body="hi"
        title="card"
        btn={{
          text: "boton1",
          type: "primario",
          href: "www.google.com",
        }}
      ></Card> */}
    </>
  );
}
