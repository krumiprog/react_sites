import { dataOne, dataTwo } from '../../cardsData';
import Card from './Card/Card';
import './Cards.scss';

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out these Destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {dataOne.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </ul>
          <ul className="cards__items">
            {dataTwo.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
