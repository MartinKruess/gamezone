export const ShopCard = () => {
  const merches = [
    {
      title: "ABC",
      img: "../../public/images/logo.svg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus provident praesentium voluptatem illum fugiat voluptate nihil ex magni quam natus possimus impedit dolorem hic adipisci temporibus dignissimos ratione aliquid esse consectetur, distinctio itaque nisi vero. Repudiandae architecto accusamus ratione iure officia excepturi alias consequuntur commodi, inventore molestiae natus similique minima magni dicta quia consequatur temporibus eum nesciunt possimus provident, atque ea dignissimos ipsam? Ducimus possimus reiciendis at quia deserunt quibusdam, dignissimos, fugiat porro voluptatum pariatur recusandae vitae est repudiandae tenetur fugit, voluptatibus autem quos. Adipisci maxime, nemo deleniti culpa non officia ipsa laboriosam quos eligendi asperiores ab, officiis at.",
      url: "htttps://www.abc.de",
    },
    {
      title: "CDE",
      img: "../../public/images/mainboard02.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus provident praesentium voluptatem illum fugiat voluptate nihil ex magni quam natus possimus impedit dolorem hic adipisci temporibus dignissimos ratione aliquid esse consectetur, distinctio itaque nisi vero. Repudiandae architecto accusamus ratione iure officia excepturi alias consequuntur commodi, inventore molestiae natus similique minima magni dicta quia consequatur temporibus eum nesciunt possimus provident, atque ea dignissimos ipsam? Ducimus possimus reiciendis at quia deserunt quibusdam, dignissimos, fugiat porro voluptatum pariatur recusandae vitae est repudiandae tenetur fugit, voluptatibus autem quos. Adipisci maxime, nemo deleniti culpa non officia ipsa laboriosam quos eligendi asperiores ab, officiis at.",
      url: "htttps://www.cde.de",
    },
    {
      title: "CDE",
      img: "../../public/images/mainboard01.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus provident praesentium voluptatem illum fugiat voluptate nihil ex magni quam natus possimus impedit dolorem hic adipisci temporibus dignissimos ratione aliquid esse consectetur, distinctio itaque nisi vero. Repudiandae architecto accusamus ratione iure officia excepturi alias consequuntur commodi, inventore molestiae natus similique minima magni dicta quia consequatur temporibus eum nesciunt possimus provident, atque ea dignissimos ipsam? Ducimus possimus reiciendis at quia deserunt quibusdam, dignissimos, fugiat porro voluptatum pariatur recusandae vitae est repudiandae tenetur fugit, voluptatibus autem quos. Adipisci maxime, nemo deleniti culpa non officia ipsa laboriosam quos eligendi asperiores ab, officiis at.",
      url: "htttps://www.cde.de",
    },
    {
      title: "CDE",
      img: "../../public/images/logo.svg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus provident praesentium voluptatem illum fugiat voluptate nihil ex magni quam natus possimus impedit dolorem hic adipisci temporibus dignissimos ratione aliquid esse consectetur, distinctio itaque nisi vero. Repudiandae architecto accusamus ratione iure officia excepturi alias consequuntur commodi, inventore molestiae natus similique minima magni dicta quia consequatur temporibus eum nesciunt possimus provident, atque ea dignissimos ipsam? Ducimus possimus reiciendis at quia deserunt quibusdam, dignissimos, fugiat porro voluptatum pariatur recusandae vitae est repudiandae tenetur fugit, voluptatibus autem quos. Adipisci maxime, nemo deleniti culpa non officia ipsa laboriosam quos eligendi asperiores ab, officiis at.",
      url: "htttps://www.cde.de",
    },
    {
      title: "CDE",
      img: "../../public/images/logo.svg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus provident praesentium voluptatem illum fugiat voluptate nihil ex magni quam natus possimus impedit dolorem hic adipisci temporibus dignissimos ratione aliquid esse consectetur, distinctio itaque nisi vero. Repudiandae architecto accusamus ratione iure officia excepturi alias consequuntur commodi, inventore molestiae natus similique minima magni dicta quia consequatur temporibus eum nesciunt possimus provident, atque ea dignissimos ipsam? Ducimus possimus reiciendis at quia deserunt quibusdam, dignissimos, fugiat porro voluptatum pariatur recusandae vitae est repudiandae tenetur fugit, voluptatibus autem quos. Adipisci maxime, nemo deleniti culpa non officia ipsa laboriosam quos eligendi asperiores ab, officiis at.",
      url: "htttps://www.cde.de",
    },
  ];

  return (
    <>
      {merches.map((article, i) => (
        <div key={i} className="basicShopCard">
          <h2>{article.title}</h2>
          <div className="image">
            <img src={article.img} alt="" ></img>
          </div>
          <p className="shopContent">{article.description}</p>
          <div className="shopFooter">
            <div className="button">
              {" "}
              <a href={article.url}>zum Artikle</a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
