import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    category: { type: String }, // e.g., Starter, Main Course, Dessert
    price: { type: Number, required: true },
    image: { type: String }, // image URL
    isAvailable: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Menu= mongoose.model("MenuItem", menuItemSchema);
export default Menu;
