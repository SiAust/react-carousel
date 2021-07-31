const Card = ({ name, img, cardStyle }) => {
  return (
    <div className={`card ${cardStyle}`}>
      <img src={img} alt={name} />
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
