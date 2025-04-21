// src/redux/slices/ThemeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: false, // الوضع الافتراضي (فاتح)
};

const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode; // تبديل الوضع عند استدعاء هذا الـ reducer
    },
  },
});

// تصدير الإجراءات
export const { toggleDarkMode } = ThemeSlice.actions;

// تصدير الـ reducer لربطه بالـ store
export default ThemeSlice.reducer;
