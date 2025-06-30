function Card({ image, title, text }) {
  return (
    <div className="card">
      {image && <img src={image} alt={title} />}
      <div className="card-text">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Card;
