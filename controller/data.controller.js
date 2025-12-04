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



//                                                  qoshimcha

//                                                         cities
// get

const getAllcities = async (req, res) => {
  try {
    const cities = read_file("largestcities.json");
    res.status(200).json(cities);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// get one

const getOnecity = async (req, res) => {
  try {
    const { id } = req.params;
    const cities = read_file("largestcities.json");
    const foundcities = cities.find((item) => item.id === id);

    if (!foundcities) {
      return res.status(404).json({
        message: "cities not found",
      });
    }
    res.status(200).json(foundcities);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//post

const addcities = async (req, res) => {
  try {
    const { name, area, population, rank} = req.body;
    const fileData = read_file("largestcities.json");
    fileData.push({
      id: v4(),
      name,
      area,
      population,
      rank
    });

    write_file("largestcities.json", fileData);
    res.status(201).json({
      message: "added new cities",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//put

const updatecities = async (req, res) => {
  try {
    const { name, area, population, rank} = req.body;
    const { id } = req.params;
    const cities = read_file("largestcities.json");
    const foundcities = cities.find((item) => item.id === id);
    if (!foundcities) {
      return res.status(404).json({
        message: "cities not found",
      });
    }
    cities.forEach((item) => {
      if (item.id === id) {
        item.name = name ? name : item.name;
        item.area = area ? area : item.area;
        item.population = population ? population : item.population;
        item.rank = rank ? rank : item.rank;
      }
    });

    write_file("largestcities.json", cities);
    res.status(200).json({
      message: "updated",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//delete

const deletecities = async (req, res) => {
  try {
    const { id } = req.params;
    const cities = read_file("largestcities.json");
    const foundcities = cities.find((item) => item.id === id);
    if (!foundcities) {
      return res.status(404).json({
        message: "cities not found",
      });
    }
    cities.forEach((item, idx) => {
      if (item.id === id) {
        cities.splice(idx, 1);
      }
    });

    write_file("largestcities.json", cities);
    res.status(200).json({
      message: "deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


//                                                         superComputers
// get

const getAllcomputers = async (req, res) => {
  try {
    const computers = read_file("supercomputers.json");
    res.status(200).json(computers);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// get one

const getOneComputer = async (req, res) => {
  try {
    const { id } = req.params;
    const computers = read_file("supercomputers.json");
    const foundcomputers = computers.find((item) => item.id === id);

    if (!foundcomputers) {
      return res.status(404).json({
        message: "computers not found",
      });
    }
    res.status(200).json(foundcomputers);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//post

const addcomputers = async (req, res) => {
  try {
    const { name, country, rank, cores, Rmax, Rpeak, power} = req.body;
    const fileData = read_file("supercomputers.json");
    fileData.push({
      id: v4(),
      name,
      country,
      rank,
      cores,
      Rmax,
      Rpeak,
      power
    });

    write_file("supercomputers.json", fileData);
    res.status(201).json({
      message: "added new computers",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//put

const updatecomputers = async (req, res) => {
  try {
    const { name, country, rank, cores, Rmax, Rpeak, power} = req.body;
    const { id } = req.params;
    const computers = read_file("supercomputers.json");
    const foundcomputers = computers.find((item) => item.id === id);
    if (!foundcomputers) {
      return res.status(404).json({
        message: "computers not found",
      });
    }
    computers.forEach((item) => {
      if (item.id === id) {
        item.name = name ? name : item.name;
        item.country = country ? country : item.country;
        item.rank = rank ? rank : item.rank;
        item.cores = cores ? cores : item.cores;
        item.Rmax = Rmax ? Rmax : item.Rmax;
        item.Rpeak = Rpeak ? Rpeak : item.Rpeak;
        item.power = power ? power : item.power;
      }
    });

    write_file("supercomputers.json", computers);
    res.status(200).json({
      message: "updated",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//delete

const deletecomputers = async (req, res) => {
  try {
    const { id } = req.params;
    const computers = read_file("supercomputers.json");
    const foundcomputers = computers.find((item) => item.id === id);
    if (!foundcomputers) {
      return res.status(404).json({
        message: "computers not found",
      });
    }
    computers.forEach((item, idx) => {
      if (item.id === id) {
        computers.splice(idx, 1);
      }
    });

    write_file("supercomputers.json", computers);
    res.status(200).json({
      message: "deleted",
    });
  } catch (error) {
    res.status(500).json({
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
  getAllcities,
  getOnecity,
  addcities,
  updatecities,
  deletecities,
  getAllcomputers,
  getOneComputer,
  addcomputers,
  updatecomputers,
  deletecomputers
};
