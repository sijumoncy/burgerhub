// dummy card will be moved to json later

const cardData = [
  {
    id: 1,
    title: "Food",
    tagline: "Lorem ipsum dolor sit amet.",
    link: "#",
    imgName: "burger1.png",
    bg:'bg-primary'
  },
  {
    id: 2,
    title: "Beverage",
    tagline: "Lorem ipsum dolor sit amet.",
    link: "#",
    imgName: "beverage1.png",
    bg:'bg-red-800'
  },
  {
    id: 3,
    title: "Snack",
    tagline: "Lorem ipsum dolor sit amet.",
    link: "#",
    imgName: "snack1.png",
    bg:'bg-green-500'
  },
];

function Category() {
  return (
    <section id="#category">
      <div className="container flex flex-col gap-5 | tabM:flex-row">
        {/* card */}
        {cardData.map((card) => (
          <div
            key={card.id}
            className={`flex py-3 rounded-lg overflow-hidden ${card.bg} | tabM:flex-1`}
          >
            <div className="basis-1/3 relative">
              <img
                src={`/images/${card.imgName}`}
                alt="category burg 1"
                className="absolute w-28 -bottom-4 -left-4"
              />
            </div>

            <div>
              <div className="mb-2">
                <h4 className="card__title">{card.title}</h4>
                <p className="text-xs">{card.tagline}</p>
              </div>
              <a href={card.link} className="text-black cursor-pointer">
                Buy It
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Category;
