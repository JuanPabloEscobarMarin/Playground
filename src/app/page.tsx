import Image from "next/image";
import { Badge } from "./components/Badge";
import { Button } from "./components/Button";
import { Card } from "./components/Card";

export default function Home() {
  return (
    <>
      <Card
        body="hi"
        image="https://v1.tailwindcss.com/img/card-top.jpg"
        title="The Coldest Sunset"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
        badge={{
          text: "#Nuevo",
        }}
        btn={{
          text: "boton1",
          type: "primario",
          href: "www.google.com",
        }}
      ></Card>
    </>
  );
}
