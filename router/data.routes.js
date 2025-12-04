const {Router} = require("express")
const { getAllFood, getOneFood, addFood, updateFood, deleteFood, getAllcities, getOnecity, addcities, updatecities, deletecities, getAllcomputers, getOneComputer, addcomputers, updatecomputers, deletecomputers } = require("../controller/data.controller")

const dataRouter = Router()

dataRouter.get("/get_all_food", getAllFood)
dataRouter.get("/get_one_food/:id", getOneFood)
dataRouter.post("/add_food", addFood)
dataRouter.post("/update_food/:id", updateFood)
dataRouter.post("/delete_food/:id", deleteFood)




//                                                 qoshimcha

dataRouter.get("/get_all_cities", getAllcities)
dataRouter.get("/get_one_city/:id", getOnecity)
dataRouter.post("/add_city", addcities )
dataRouter.put("/update_city/:id", updatecities)
dataRouter.delete("/delete_city/:id", deletecities)


dataRouter.get("/get_all_computers", getAllcomputers)
dataRouter.get("/get_one_computer/:id", getOneComputer)
dataRouter.post("/add_computer", addcomputers )
dataRouter.put("/update_computer/:id", updatecomputers)
dataRouter.delete("/delete_computer/:id", deletecomputers)


module.exports = dataRouter