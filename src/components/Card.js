const Card = ({ handleMouseDown, name, img, cardStyle }) => {
  return (
    <article className={cardStyle}>
      <div className="card" onMouseDown={handleMouseDown}>
        <img src={img} alt={name} />
        <h2>{name}</h2>
      </div>
    </article>
  );
};

export default Card;
