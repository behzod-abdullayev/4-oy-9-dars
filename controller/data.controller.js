const { read_file, write_file } = require("../fs/file-manager");
const {v4} = require("uuid")
//get
const getAllFood = async (req, res) => {
  try {
    const food = read_file("evos.json");
    res.status(200).render("index", {food});
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

//get_one
const getOneFood = async (req, res) => {
  try {
        const { id } = req.params;
    const food = read_file("evos.json");

    const foundfood = food.find((food) => food.id === id);

    if (!foundfood) {
      return res.status(302).redirect("http://localhost:4001/get_all_food");
    }

    res.status(200).render("details", { foundfood });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

//post
const addFood = async (req, res) => {
  try {
    const {title, name, price, type, drink} = req.body
    const food = read_file("evos.json")
    food.push({
      id: v4(),
      title,
      name,
      price,
      type,
      drink,
      time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    })
    write_file("evos.json", food)
    res.status(302).redirect("http://localhost:4001/get_all_food")
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

//update
const updateFood = async (req, res) => {
  try {
        const { id } = req.params;
    const { title, name, price, type, drink } = req.body;
    const food = read_file("evos.json");

    const foundfood = food.find((food) => food.id === id);

    if (!foundfood) {
      return res.status(302).redirect("http://localhost:4001/get_all_food");
    }

    food.forEach((item) => {
      if (item.id === id) {
        item.title = title ? title : item.title
        item.name = name ? name : item.name;
        item.price = price ? price : item.price;
        item.type = type ? type : item.type;
        item.drink = drink ? drink : item.drink;
      }
    });

    write_file("evos.json", food);
    res.status(302).redirect("http://localhost:4001/get_all_food");
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

//delete
const deleteFood = async (req, res) => {
  try {
        const { id } = req.params;
    const food = read_file("evos.json");

    const foundfood = food.find((food) => food.id === id);

    if (!foundfood) {
      return res.status(302).redirect("http://localhost:4001/get_all_food");
    }

    food.forEach((item, idx) => {
      if (item.id === id) {
        food.splice(idx, 1);
      }
    });

    write_file("evos.json", food);
    res.status(302).redirect("http://localhost:4001/get_all_food");
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllFood,
  getOneFood,
  updateFood,
  addFood,
  deleteFood,
};
