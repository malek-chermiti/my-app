function Cards({ gifs, onCardClick }) {
  return (
    <div className="cards">
      {gifs.map((gif) => (
        <div
          key={gif.id}
          className="card"
          onClick={() => onCardClick(gif.id)}
        >
          <img
            src={gif.images.fixed_height.url}
            alt={gif.title}
          />
          <p>{gif.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;