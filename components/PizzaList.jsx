import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA YOU'VE EVER TASTED</h1>
      <p className={styles.desc}>
        Hello Hungry, behold the best Pizza you've ever laid eyes on and ever
        tasted ! We provide classic pizzas with interesting twists so you always
        have something new and exciting to expect, because why not ? Get ready
        to curb your hunger at mouthwatering prices and exciting deals. Our
        promise you'll never be HANGRY again ! Not to forget we provide free
        home delivery under 30 mins or your pizza's on us !
      </p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};

export default PizzaList;
