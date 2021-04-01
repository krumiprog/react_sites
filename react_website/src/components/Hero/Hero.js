import Button from '../Button/Button';
import './Hero.scss';

const Hero = () => {
  return (
    <div className="hero__container">
      <img className="hero__img" src="/images/img-2.jpg" />
      <h1>Adventure</h1>
      <div className="hero__btns">
        <Button
          className="btn"
          buttonStyle="btn-outline"
          buttonSize="btn-large"
        >
          Get Started
        </Button>
        <Button
          className="btn"
          buttonStyle="btn-primary"
          buttonSize="btn-large"
        >
          Watch <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
