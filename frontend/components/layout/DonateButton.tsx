"use client";

import { useState } from "react";
import { X, Heart } from "lucide-react";
import { createDonatePayment } from "@/services/user.services";

export default function DonateButton() {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(501);
  const [loading, setLoading] = useState(false);

  const handleDonate = async () => {
    try {
      setLoading(true);

      const res = await createDonatePayment(amount);

      if (res.status) {
        window.location.href = res.payment_url;
      } else {
        alert(res.message);
      }
    } catch (err) {
      console.error(err);
      alert("Unable to create payment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-[#D4A017] hover:bg-[#C3950C] text-white py-2.5 px-6 rounded-full font-semibold shadow-lg transition"
      >
        Donate
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 z-10">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center">
              <div className="bg-[#D4A017]/10 p-4 rounded-full mb-4">
                <Heart className="text-[#A63D00]" size={30} />
              </div>

              <h2 className="text-2xl font-bold text-[#2C1810]">
                Donate for Gau Seva
              </h2>

              <p className="text-gray-500 text-sm mt-2 text-center">
                Your contribution helps provide food, shelter and medical care
                for cows.
              </p>

              <div className="mt-8 text-center">
                <div className="text-4xl font-bold text-[#A63D00]">
                  ₹{amount.toLocaleString("en-IN")}
                </div>
              </div>

              <input
                type="range"
                min={500}
                max={251000}
                step={500}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full mt-8 accent-[#A63D00]"
              />

              <div className="grid grid-cols-4 gap-2 mt-5 w-full">
                {[501, 1100, 2100, 5100].map((price) => (
                  <button
                    key={price}
                    onClick={() => setAmount(price)}
                    className={`rounded-xl py-2 text-sm font-semibold border transition
                      ${
                        amount === price
                          ? "bg-[#A63D00] text-white border-[#A63D00]"
                          : "border-gray-200 hover:border-[#A63D00]"
                      }`}
                  >
                    ₹{price}
                  </button>
                ))}
              </div>

              <div className="mt-6 w-full">
                <label className="text-xs font-semibold text-gray-500">
                  Or Enter Custom Amount
                </label>

                <input
                  type="number"
                  min={1}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value) || 0)}
                  className="w-full mt-2 border rounded-xl px-4 py-3 focus:outline-none focus:border-[#A63D00]"
                />
              </div>

              <button
                onClick={handleDonate}
                disabled={loading || amount < 1}
                className="mt-8 w-full bg-[#A63D00] hover:bg-[#8E3000] text-white py-4 rounded-xl font-bold transition disabled:opacity-50"
              >
                {loading
                  ? "Redirecting..."
                  : `Pay ₹${amount.toLocaleString("en-IN")}`}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
