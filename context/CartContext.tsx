"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  quantity: number;
  intention?: string;
  crystal?: string;
}

export interface WishlistItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category?: string;
  material?: string;
  origin?: string;
  badge?: string;
  specs?: string[];
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  totalCount: number;
  subtotal: number;
  // Wishlist
  wishlist: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
  toggleWishlist: (item: WishlistItem) => void;
  isInWishlist: (id: string) => boolean;
  wishlistCount: number;
  isHydrated: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const existingContext = useContext(CartContext);
  if (existingContext) {
    return <>{children}</>;
  }

  return <CartProviderInternal>{children}</CartProviderInternal>;
}

function CartProviderInternal({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  // Hydrate from localStorage on client mount
  useEffect(() => {
    try {
      const storedWishlist = localStorage.getItem("svastiman_wishlist");
      if (storedWishlist) {
        setWishlist(JSON.parse(storedWishlist));
      } else {
        // Default initial items on first visit
        setWishlist([
          {
            id: "prod-rudraksha-108",
            name: "Himalayan Rudraksha 108 Japa Mala",
            price: 2899,
            originalPrice: 3499,
            image: "/images/products/prod1.webp",
            category: "rudraksha",
            badge: "100% Wild Sourced",
            specs: ["Lab X-Ray Tested", "Traditional Brahmagranthi Knots", "Sandalwood Oil Cured"],
          },
          {
            id: "prod-lapis-bracelet",
            name: "Raw Earth Lapis Lazuli Bracelet",
            price: 1999,
            originalPrice: 2499,
            image: "/images/products/prod3.webp",
            category: "gemstones",
            badge: "Zero Chemical Dye",
            specs: ["Untreated Metamorphic Matrix", "Natural Pyrite Specks", "Hand-Strung"],
          },
        ]);
      }
      const storedCart = localStorage.getItem("svastiman_cart");
      if (storedCart) {
        setItems(JSON.parse(storedCart));
      }
    } catch {
      // Ignore localStorage errors
    }
    setIsHydrated(true);
  }, []);

  // Save wishlist changes to localStorage
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem("svastiman_wishlist", JSON.stringify(wishlist));
    } catch {
      // Ignore localStorage errors
    }
  }, [wishlist, isHydrated]);

  // Save cart changes to localStorage
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem("svastiman_cart", JSON.stringify(items));
    } catch {
      // Ignore localStorage errors
    }
  }, [items, isHydrated]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const addToCart = (product: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Wishlist actions
  const addToWishlist = (item: WishlistItem) => {
    setWishlist((prev) => {
      if (prev.some((w) => w.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  const removeFromWishlist = (id: string) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleWishlist = (item: WishlistItem) => {
    setWishlist((prev) => {
      if (prev.some((w) => w.id === item.id)) {
        return prev.filter((w) => w.id !== item.id);
      }
      return [...prev, item];
    });
  };

  const isInWishlist = (id: string) => {
    return wishlist.some((item) => item.id === id);
  };

  const wishlistCount = wishlist.length;

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalCount,
        subtotal,
        wishlist,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        isInWishlist,
        wishlistCount,
        isHydrated,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
