const Food = require('../models/foodModel');

const getAllFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching food items' });
  }
};

const getFoodById = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) return res.status(404).json({ message: 'Food item not found' });
    res.status(200).json(food);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching food item' });
  }
};

const createFood = async (req, res) => {
  try {
    const newFood = new Food(req.body);
    const savedFood = await newFood.save();
    res.status(201).json(savedFood);
  } catch (error) {
    res.status(400).json({ message: 'Error creating food item' });
  }
};

const updateFood = async (req, res) => {
  try {
    const updatedFood = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedFood) return res.status(404).json({ message: 'Food item not found' });
    res.status(200).json(updatedFood);
  } catch (error) {
    res.status(400).json({ message: 'Error updating food item' });
  }
};

const deleteFood = async (req, res) => {
  try {
    const deletedFood = await Food.findByIdAndDelete(req.params.id);
    if (!deletedFood) return res.status(404).json({ message: 'Food item not found' });
    res.status(200).json({ message: 'Food item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting food item' });
  }
};

module.exports = {
  getAllFoods,
  getFoodById,
  createFood,
  updateFood,
  deleteFood,
};
