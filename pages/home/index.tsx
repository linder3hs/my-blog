import { NextPage } from "next";
import Card from "../../components/card";
import styles from "../../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <div>
          <h1>Linder Hassinger</h1>
        </div>
        <div>
          <button>...</button>
        </div>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>List</li>
          <li>About</li>
        </ul>
      </div>
      <Card
        name="Node Cron (Tareas programadas)"
        date="April 11, 2022"
        description="Node cron es una librería que nos permite hacer tareas 
        programadas al estilo de Linux, pero de una forma mas sencilla
        Primero debemos crear nuestro proyecto de NodeJS con el comando"
        image="https://miro.medium.com/fit/c/224/224/1*lnaHCW-LqDwJ8t2kE3QEYw.png"
      />
      <Card
        name="MVP (Producto mínimo viable)"
        date="April 11, 2022"
        description="Hace unos días estaba en la oficina y escuche que alguien 
        que quería emprender y le aconsejaron que haga un MVP de su idea, a lo
        cual esta respondió que no sabía que era, eso realmente me sorprendió y me hizo pensar que debe haber mucha gente que desconoce este tema así te guste todo el tema del emprendimiento, por eso en este relato te explicare con mis palabras lo que significa para mi hacer un MVP."
        image="https://miro.medium.com/fit/c/224/224/1*8L3RS-ARIz14zy28cvMSrw.jpeg"
      />
    </div>
  );
};

export default Home;
