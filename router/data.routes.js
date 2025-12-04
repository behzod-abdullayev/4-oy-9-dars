const {Router} = require("express")
const { getAllFood, getOneFood, addFood, updateFood, deleteFood } = require("../controller/data.controller")

const dataRouter = Router()

dataRouter.get("/get_all_food", getAllFood)
dataRouter.get("/get_one_food/:id", getOneFood)
dataRouter.post("/add_food", addFood)
dataRouter.post("/update_food/:id", updateFood)
dataRouter.post("/delete_food/:id", deleteFood)

module.exports = dataRouter