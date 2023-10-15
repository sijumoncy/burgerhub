const offerData = [
  {
    id: 1,
    offer: "Limited Offer",
    title: "Weekend Fun",
    tagline: "40% off On any buy 5 and get one extra. 5% off on Single",
    link: "#",
    imgName: "offer1.png",
  },
  {
    id: 2,
    offer: "Limited Offer",
    title: "Buy More get More",
    tagline: "Buy 3 get 50% off on Next",
    link: "#",
    imgName: "offer2.png",
  },
];

function Offers() {
  return (
    <section id="offers">
      <div className="container flex flex-col gap-5 | tabM:flex-row">
        {offerData.map((offer) => (
          <div key={offer.id} className="bg-black/5 dark:bg-bgSecondaryDark dark:border dark:border-white/20 dark:text-white/90
            flex flex-col p-5 rounded-lg group/card | tabM:flex-row tabM:item-center 
            | lap:flex-row-reverse lap:flex-1">
            <img src={`/images/${offer.imgName}`} alt="offers" className="w-40 mx-auto group-hover/card:animate-upDown 
                | tabM:mx-5"/>
            <div className="space-y-2 pt-5 | tabM:pt-0">
              <p className="text-xs text-seconday">{offer.offer}</p>
              <h3 className="card__title">{offer.title}</h3>
              <p className="para__text pb-2">{offer.tagline}</p>
              <a href={offer.link} className="text-sm text-seconday text-secondary">
                Buy It
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Offers;
