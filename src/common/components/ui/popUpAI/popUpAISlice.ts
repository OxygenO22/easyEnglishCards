import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PopupState = {
  isOpen: boolean;
  content: React.ReactNode | null;
  title?: string;
  options?: PopupOptions;
};

type PopupOptions = {
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  width?: string | number;
  maxWidth?: string | number;
  height?: string | number;
  maxHeight?: string | number;
};

const initialState: PopupState = {
  isOpen: false,
  content: null,
  title: undefined,
  options: {
    closeOnOverlayClick: true,
    closeOnEscape: true,
    showCloseButton: true,
    width: 'auto',
    maxWidth: '90vw',
    height: 'auto',
    maxHeight: '90vh',
  },
};

const popUpAISlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openPopup: (
      state,
      action: PayloadAction<{
        content: React.ReactNode;
        title?: string;
        options?: PopupOptions;
      }>
    ) => {
      state.isOpen = true;
      state.content = action.payload.content;
      state.title = action.payload.title;
      state.options = {
        ...initialState.options,
        ...action.payload.options,
      };
    },
    closePopup: (state) => {
      state.isOpen = false;
      state.content = null;
      state.title = undefined;
    },
  },
});

export const { openPopup, closePopup } = popUpAISlice.actions;
export default popUpAISlice.reducer;