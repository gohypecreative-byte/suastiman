"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowLeft, Lock } from "lucide-react";
import Image from "next/image";

export function CartDrawer() {
  const { isOpen, closeCart, items, removeFromCart, updateQuantity, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs transition-opacity duration-300">
      {/* Overlay click to close */}
      <div className="absolute inset-0" onClick={closeCart} />

      <div className="relative w-full max-w-[400px] bg-white text-[#1A1815] h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300 border-l border-[#E2DEC9]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4.5 border-b border-[#EAE6DF] bg-white">
          <h2 className="text-sm font-semibold tracking-wider text-[#1A1815] uppercase font-sans">
            YOUR CART
          </h2>
          <button
            onClick={closeCart}
            className="p-1 text-stone-400 hover:text-[#1A1815] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Cart Body */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-6 py-12 text-center">
              <div className="w-16 h-16 rounded-full border border-[#E2DEC9] bg-[#FAF8F5] flex items-center justify-center mb-4">
                <ShoppingBag className="w-7 h-7 text-[#1A1815] stroke-[1.5]" />
              </div>
              <h3 className="text-base font-semibold text-[#1A1815] mb-1">Your cart is empty</h3>
              <p className="text-xs text-stone-500 mb-6">Let&apos;s add something you&apos;ll love.</p>
              <button
                onClick={closeCart}
                className="px-6 py-2.5 rounded-lg bg-[#1A1815] hover:bg-[#2C2723] text-[#FAF8F5] text-xs font-semibold tracking-wide transition-colors shadow-sm"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            <div className="divide-y divide-[#EAE6DF] px-6 py-2">
              {items.map((item) => (
                <div key={item.id} className="py-4 flex gap-4 items-start">
                  <div className="relative w-18 h-18 rounded-lg overflow-hidden bg-[#FAF8F5] shrink-0 border border-[#E2DEC9]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="72px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-1">
                      <h3 className="text-xs font-medium text-[#1A1815] leading-snug line-clamp-2">
                        {item.name}
                      </h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-stone-400 hover:text-red-600 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    {item.crystal && (
                      <p className="text-[11px] text-[#C5A880] font-medium mt-0.5">{item.crystal}</p>
                    )}
                    <div className="flex justify-between items-center mt-3">
                      <div className="flex items-center border border-[#E2DEC9] rounded-md bg-white">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-2 py-1 text-stone-500 hover:text-[#1A1815] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-medium text-[#1A1815]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-2 py-1 text-stone-500 hover:text-[#1A1815] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="text-right">
                        <span className="font-semibold text-xs text-[#1A1815]">
                          ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                        </span>
                        {item.originalPrice && (
                          <span className="text-[11px] text-stone-400 line-through ml-1.5">
                            ₹{(item.originalPrice * item.quantity).toLocaleString("en-IN")}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 bg-white border-t border-[#EAE6DF] mt-auto">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-medium tracking-wider text-stone-500 uppercase">
              SUBTOTAL
            </span>
            <span className="text-sm font-semibold text-[#1A1815]">
              ₹{subtotal.toLocaleString("en-IN")}
            </span>
          </div>
          <p className="text-[11px] text-stone-400 mb-4">
            Taxes &amp; shipping calculated at checkout.
          </p>

          <div className="flex gap-3">
            <button
              onClick={closeCart}
              className="flex-1 py-3 px-4 border border-[#1A1815]/30 rounded-lg flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wider text-[#1A1815] hover:bg-[#FAF8F5] uppercase transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 stroke-[2]" />
              <span>CONTINUE</span>
            </button>

            <button
              disabled={items.length === 0}
              onClick={() => {
                if (items.length > 0) {
                  alert("Proceeding to secure checkout...");
                }
              }}
              className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wider uppercase transition-colors ${
                items.length === 0
                  ? "bg-[#1A1815]/40 text-white/80 cursor-not-allowed"
                  : "bg-[#1A1815] hover:bg-[#2C2723] text-white active:scale-[0.99] shadow-sm"
              }`}
            >
              <Lock className="w-3.5 h-3.5 stroke-[2] text-[#C5A880]" />
              <span>CHECKOUT</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
