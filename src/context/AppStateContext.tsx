"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Book } from "@/lib/data";

interface AppState {
  favorites: Book[];
  cart: Book[];
  isCartOpen: boolean;
  isFavoritesOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  setIsFavoritesOpen: (open: boolean) => void;
  toggleFavorite: (book: Book) => void;
  addToCart: (book: Book) => void;
  removeFromCart: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

const AppStateContext = createContext<AppState | undefined>(undefined);

export const AppStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Book[]>([]);
  const [cart, setCart] = useState<Book[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedFavs = localStorage.getItem("lumina_favs");
    const savedCart = localStorage.getItem("lumina_cart");
    if (savedFavs) {
      try {
        setFavorites(JSON.parse(savedFavs));
      } catch (e) {
        console.error("Failed to parse favorites", e);
      }
    }
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  // Sync to localStorage
  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem("lumina_favs", JSON.stringify(favorites));
    }
  }, [favorites]);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("lumina_cart", JSON.stringify(cart));
    }
  }, [cart]);

  const toggleFavorite = (book: Book) => {
    setFavorites(prev => {
      const exists = prev.find(b => b.id === book.id);
      if (exists) {
        return prev.filter(b => b.id !== book.id);
      }
      return [...prev, book];
    });
  };

  const isFavorite = (id: string) => favorites.some(b => b.id === id);

  const addToCart = (book: Book) => {
    setCart(prev => {
      const exists = prev.find(b => b.id === book.id);
      if (exists) return prev;
      return [...prev, book];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(b => b.id !== id));
  };

  return (
    <AppStateContext.Provider value={{ favorites, cart, isCartOpen, setIsCartOpen, isFavoritesOpen, setIsFavoritesOpen, toggleFavorite, addToCart, removeFromCart, isFavorite }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("useAppState must be used within an AppStateProvider");
  }
  return context;
};
