import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";

// 0. API LINK
const POST_URI = "https://fakestoreapi.com/products";

// 1. Initial state of the slice
const initialState = {
  status: "",
  products: [],
  toggledProductId: null,
  cart: [],
  error: null,
};

// 2. API Fetching function
export const fetchProducts = createAsyncThunk(
  "shop/fetchProducts",
  async () => {
    try {
      const response = await axios.get(POST_URI);
      return response.data;
    } catch (error) {
      throw error.message;
    }
  }
);

// 3. Slice with all it reducers
const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    toggleProduct: (state, action) => {
      state.toggledProductId = action.payload;
    },
    addToCard: (state, action) => {
      if (
        state.cart.some((item) => item.productId === action.payload.productId)
      ) {
        const newCart = state.cart.map((item) =>
          item.productId === action.payload.productId
            ? { ...item, count: item.count + action.payload.count }
            : item
        );

        return {
          ...state,
          cart: newCart,
        };
      } else {
        state.cart.push({ ...action.payload });
      }
    },
    updateCartCount: (state, action) => {
      const newCart = state.cart.map((item) =>
        item.productId === action.payload.productId
          ? { ...item, count: action.payload.count }
          : item
      );

      return {
        ...state,
        cart: newCart,
      };
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.productId !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
        state.toggledProductId = action.payload[0].id;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// 4. Getters For the selectors
export const getProducts = (state) => state.shop.products;

export const getProductsStatus = (state) => state.shop.status;
export const getToggledProductId = (state) => state.shop.toggledProductId;

export const getProductsError = (state) => state.shop.error;
export const getProductsCart = (state) => state.shop.cart;

// 5. State manupilation functions
export const getCartTotalPrice = () =>
  [...useSelector(getProductsCart)].reduce(
    (prv, cur) => prv + cur.price * cur.count,
    0
  );

export const getProductFromCart = (productId) =>
  [...useSelector(getProductsCart)].find(
    (product) => product.productId === productId
  );

export const getFamousProducts = () =>
  [...useSelector(getProducts)]
    .sort((a, b) => a.rating.rate - b.rating.rate)
    .reverse()
    .slice(0, 5);

export const getProductById = (id) =>
  [...useSelector(getProducts)].find((product) => product.id === id);

// Exports
export const { toggleProduct, addToCard, updateCartCount, removeFromCart } =
  shopSlice.actions;
export default shopSlice.reducer;
