var items = [
    {
        id: 1,
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32256-0.jpg?ver=6.21",
        name: "Family Feast",
        catagory: "Non veg",
        price: "234.00",
        description: "Value Mean with Tandoori Zinger, 2 piece Hot Wings, Fries and Pepsi"
    },
    {
        id: 2,
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-404135.jpg?ver=6.21",
        name: "Chick n Fries Solo Combo",
        catagory: "Non veg",
        price: "399.00",
        description: "Value Mean with Tandoori Zinger, 2 piece Hot Wings, Fries and Pepsi"
    },
    {
        id: 3,
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-404138.jpg?ver=6.21",
        name: "Ultimate Saving Bucket",
        catagory: "Non veg",
        price: "699.00",
        description: "Value Mean with Tandoori Zinger, 2 piece Hot Wings, Fries and Pepsi"
    },
    {
        id: 4,
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-404027.jpg?ver=6.21",
        name: "Tandoori Zinger",
        catagory: "Non veg",
        price: "180.00",
        description: "Value Mean with Tandoori Zinger, 2 piece Hot Wings, Fries and Pepsi"
    },
    {
        id: 5,
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-402625.jpg?ver=6.21",
        name: "Buddy Meal",
        catagory: "Non veg",
        price: "460.00",
        description: "Value Mean with Tandoori Zinger, 2 piece Hot Wings, Fries and Pepsi"
    },
    {
        id: 6,
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-402935.jpg?ver=6.21",
        name: "Rice Bowls & wings",
        catagory: "Non veg",
        price: "519.00",
        description: "Value Mean with Tandoori Zinger, 2 piece Hot Wings, Fries and Pepsi"
    },
    {
        id: 7,
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-404063.jpg?ver=6.21",
        name: "All Chicken Box",
        catagory: "Non veg",
        price: "179.00",
        description: "Value Mean with Tandoori Zinger, 2 piece Hot Wings, Fries and Pepsi"
    },
    {
        id: 8,
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-404067.jpg?ver=6.21",
        name: "Zinger Tandoori Box",
        catagory: "Non veg",
        price: "299.00",
        description: "Value Mean with Tandoori Zinger, 2 piece Hot Wings, Fries and Pepsi"
    },
    {
        id: 9,
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-100106.jpg?ver=6.21",
        name: "Chick N Share",
        catagory: "Non veg",
        price: "449.00",
        description: "Value Mean with Tandoori Zinger, 2 piece Hot Wings, Fries and Pepsi"
    }
]

if (!window.localStorage.getItem("items"))
    window.localStorage.setItem("items", JSON.stringify(items));

if (!window.localStorage.getItem("cart"))
    window.localStorage.setItem("cart", JSON.stringify([]));
