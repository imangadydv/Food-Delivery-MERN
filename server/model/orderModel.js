import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" },
        quantity: { type: Number, default: 1 },
      },
    ],
    totalAmount: { type: Number, required: true },
    paymentStatus: { type: String, enum: ["pending", "completed", "failed"], default: "pending" },
    orderStatus: { type: String, enum: ["placed", "preparing", "delivered"], default: "placed" },
    deliveryAddress: { type: String },
    paymentMethod: { type: String },
  },
  { timestamps: true }
);

const Order =  mongoose.model("Order", orderSchema);
export default Order;
