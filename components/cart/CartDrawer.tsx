"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { X, Trash2, Plus, Minus, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";

export function CartDrawer() {
  const { isOpen, closeCart, items, removeFromCart, updateQuantity, subtotal, totalCount } =
    useCart();

  const freeShippingThreshold = 1999;
  const progress = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs transition-opacity duration-300">
      {/* Overlay click to close */}
      <div className="absolute inset-0" onClick={closeCart} />

      <div className="relative w-full max-w-md bg-[#F9F8F5] text-[#111111] h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-[#132F47] text-[#ECEADE]">
          <div className="flex items-center gap-2">
            <h2 className="font-serif text-xl tracking-wide">Sacred Bag ({totalCount})</h2>
          </div>
          <button
            onClick={closeCart}
            className="p-1.5 rounded-full hover:bg-white/10 transition-colors text-[#ECEADE]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free shipping banner */}
        <div className="bg-[#ECEADE] px-6 py-3 border-b border-[#E2DEC9] text-xs">
          {remainingForFreeShipping === 0 ? (
            <p className="font-medium text-[#132F47] flex items-center gap-1.5">
              <strong>Sacred Gift:</strong> You have unlocked Free Vedic Energized Shipping!
            </p>
          ) : (
            <div>
              <p className="text-[#132F47] mb-1.5 font-medium">
                Add <span className="font-bold">₹{remainingForFreeShipping}</span> more for Free
                Consecrated Delivery
              </p>
              <div className="w-full bg-[#D4CFB9] h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#132F47] h-full transition-all duration-500 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-[#E2DEC9]/60">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[#ECEADE] flex items-center justify-center text-[#132F47] mb-4">
              </div>
              <p className="font-serif text-xl text-[#132F47] mb-1">Your Sacred Bag is Empty</p>
              <p className="text-xs text-stone-500 max-w-xs mb-6">
                Explore our curated spiritual energy bracelets, malas, and zodiac talismans.
              </p>
              <button
                onClick={closeCart}
                className="px-6 py-2.5 rounded-full bg-[#132F47] text-[#ECEADE] text-sm font-medium hover:bg-[#1A3F5E] transition-colors"
              >
                Explore Collection
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="py-4 flex gap-4 items-start">
                <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-[#ECEADE] shrink-0 border border-[#E2DEC9]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start gap-1">
                    <h3 className="font-serif text-sm font-medium text-[#132F47] leading-snug line-clamp-2">
                      {item.name}
                    </h3>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-stone-400 hover:text-red-600 transition-colors p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  {item.crystal && (
                    <p className="text-[11px] text-[#C5A880] font-medium mt-0.5">{item.crystal}</p>
                  )}
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center border border-[#E2DEC9] rounded-md bg-white">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-2 py-1 text-stone-600 hover:text-[#132F47]"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-semibold text-[#132F47]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="px-2 py-1 text-stone-600 hover:text-[#132F47]"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold text-sm text-[#132F47]">
                        ₹{item.price * item.quantity}
                      </span>
                      {item.originalPrice && (
                        <span className="text-xs text-stone-400 line-through ml-1.5">
                          ₹{item.originalPrice * item.quantity}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout */}
        {items.length > 0 && (
          <div className="p-6 bg-white border-t border-[#E2DEC9]">
            <div className="flex justify-between items-center text-sm mb-2 text-stone-600">
              <span>Subtotal</span>
              <span className="font-serif text-lg font-bold text-[#132F47]">₹{subtotal}</span>
            </div>
            <p className="text-[11px] text-stone-500 mb-4 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              100% Certified Authentic Natural Stones & Energized in India
            </p>
            <button
              onClick={() => alert("Proceeding to secure spiritual checkout...")}
              className="w-full py-3.5 rounded-xl bg-[#132F47] hover:bg-[#1A3F5E] text-[#ECEADE] font-medium flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-[0.99]"
            >
              <span>Instant Checkout</span>
              <ArrowRight className="w-4 h-4 text-[#C5A880]" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
