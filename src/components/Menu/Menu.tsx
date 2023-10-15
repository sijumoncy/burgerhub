import { useState } from "react";

// load from cms or json later
const menuSection = {
  title: "Explore the Menu",
  tagLine:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quam nisi quisquam odio fugiat vitae, nesciunt eaque aliquid possimus!",
  menuCategory: ["All", "Food", "Snack", "Beverage"],
  menuItems: [
    {
      id: 1,
      category: "Food",
      itemType: "burger",
      imageName: "burger1.png",
      title: "Regular Beef Burger",
      tagLine:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quam nisi quisquam odio fugiat vitae",
      price: "₹150",
    },
    {
      id: 2,
      category: "Food",
      itemType: "burger",
      imageName: "burger2.png",
      title: "Regular Beef Burger",
      tagLine:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quam nisi quisquam odio fugiat vitae",
      price: "₹150",
    },
    {
      id: 3,
      category: "Food",
      itemType: "burger",
      imageName: "burger3.png",
      title: "Regular Beef Burger",
      tagLine:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quam nisi quisquam odio fugiat vitae",
      price: "₹150",
    },
    {
      id: 4,
      category: "Food",
      itemType: "burger",
      imageName: "burger4.png",
      title: "Regular Beef Burger",
      tagLine:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quam nisi quisquam odio fugiat vitae",
      price: "₹150",
    },
    {
      id: 5,
      category: "Food",
      itemType: "burger",
      imageName: "burger5.png",
      title: "Regular Beef Burger",
      tagLine:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quam nisi quisquam odio fugiat vitae",
      price: "₹150",
    },
    {
      id: 6,
      category: "Food",
      itemType: "burger",
      imageName: "burger6.png",
      title: "Regular Beef Burger",
      tagLine:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quam nisi quisquam odio fugiat vitae",
      price: "₹150",
    },
    {
      id: 7,
      category: "Food",
      itemType: "burger",
      imageName: "hero-img.png",
      title: "Regular Beef Burger",
      tagLine:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quam nisi quisquam odio fugiat vitae",
      price: "₹150",
    },
    {
      id: 8,
      category: "Snack",
      itemType: "fries",
      imageName: "snack1.png",
      title: "French Fries Bucket",
      tagLine:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quam nisi quisquam odio fugiat vitae",
      price: "₹300",
    },
    {
      id: 9,
      category: "Snack",
      itemType: "fries",
      imageName: "snack2.png",
      title: "Spicy Fries Plate",
      tagLine:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quam nisi quisquam odio fugiat vitae",
      price: "₹200",
    },
    {
      id: 10,
      category: "Snack",
      itemType: "sanwitch",
      imageName: "snack3.png",
      title: "sanwitch",
      tagLine:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quam nisi quisquam odio fugiat vitae",
      price: "₹200",
    },
    {
      id: 11,
      category: "Snack",
      itemType: "chips",
      imageName: "snack4.png",
      title: "Spicy Cracker",
      tagLine:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quam nisi quisquam odio fugiat vitae",
      price: "₹200",
    },
    {
      id: 12,
      category: "Snack",
      itemType: "fries",
      imageName: "snack5.png",
      title: "Crispy Fries Normal",
      tagLine:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quam nisi quisquam odio fugiat vitae",
      price: "₹120",
    },
    {
      id: 13,
      category: "Snack",
      itemType: "popcorn",
      imageName: "snack6.png",
      title: "Popcorn Bucket",
      tagLine:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quam nisi quisquam odio fugiat vitae",
      price: "₹180",
    },
    {
      id: 14,
      category: "Beverage",
      itemType: "juice",
      imageName: "beverage1.png",
      title: "Mojitos",
      tagLine:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quam nisi quisquam odio fugiat vitae",
      price: "₹80",
    },
    {
      id: 15,
      category: "Beverage",
      itemType: "juice",
      imageName: "beverage2.png",
      title: "Chilled Smoothy",
      tagLine:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quam nisi quisquam odio fugiat vitae",
      price: "₹100",
    },
    {
      id: 16,
      category: "Beverage",
      itemType: "juice",
      imageName: "beverage3.png",
      title: "Grapes Wonder",
      tagLine:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quam nisi quisquam odio fugiat vitae",
      price: "₹120",
    },
    {
      id: 17,
      category: "Beverage",
      itemType: "juice",
      imageName: "beverage4.png",
      title: "Orange Freshness",
      tagLine:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quam nisi quisquam odio fugiat vitae",
      price: "₹130",
    },
    {
      id: 18,
      category: "Beverage",
      itemType: "juice",
      imageName: "beverage5.png",
      title: "Feel the Apple",
      tagLine:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quam nisi quisquam odio fugiat vitae",
      price: "₹150",
    },
  ],
};

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState<string>(
    menuSection.menuCategory[0]
  );
  return (
    <section id="menu">
      <div className="container">
        <div className="max-w-md mx-auto text-center">
          <h2 className="main__title text-3xl">{menuSection.title}</h2>
          <div className="seperator mx-auto" />
          <p className="para__text">{menuSection.tagLine}</p>
          <div>
            <ul className="flex flex-wrap justify-center gap-3 py-10">
              {menuSection.menuCategory.map((category) => (
                <li
                  key={category}
                  className={`btn btn-primary ${
                    selectedMenu === category ? "bg-primary" : "bg-black/5"
                  }`}
                  onClick={() => setSelectedMenu(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* menu list */}
        <div>
          <ul className="grid grid-cols-1 gap-5 | tabM:grid-cols-2 | lap:grid-cols-4 lap:gap-12">
            {menuSection.menuItems.map(
              (menuItem) =>
                (selectedMenu === "All" ||
                menuItem.category === selectedMenu) && (
                  <li key={menuItem.id} className="group/card cursor-pointer">
                    <div
                      className="h-56 grid place-items-center bg-black/5 rounded-3xl group-hover/card:bg-primary ease-linear duration-200
             | lap:h-40 "
                    >
                      <img
                        src={`/images/${menuItem.imageName}`}
                        alt="product-img"
                        className="w-40 group-hover/card:scale-110 ease-linear duration-200 | tabM:w-48 | lap:w-24"
                      />
                    </div>

                    <div className="pt-5 ">
                      <div className="mb-2">
                        <h4 className="card__title">{menuItem.title}</h4>
                        <p className="para__text">{menuItem.tagLine}</p>
                      </div>

                      <p className="text-seconday ">{menuItem.price}</p>
                      {/* add a kart or buy icon */}
                    </div>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Menu;
