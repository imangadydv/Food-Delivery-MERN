import mongoose from "mongoose";

const donationSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: { type: String },
    email: { type: String },
    amount: { type: Number, required: true },
    paymentMethod: { type: String },
    paymentStatus: { type: String, enum: ["pending", "success", "failed"], default: "pending" },
    message: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Donation", donationSchema);
