import React, { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { closePopup } from './popUpAISlice';
import ReactDOM from "react-dom";
import s from './PopUpAI.module.scss'

export const PopUpAI = () => {

  const dispatch = useAppDispatch();
  const { isOpen, content, title, options } = useAppSelector(
    (state) => state.popUpAI
  );
  const popupRef = useRef<HTMLDivElement>(null);

  // Обработка ESC
  useEffect(() => {
    if (!options?.closeOnEscape || !isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dispatch(closePopup());
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, options?.closeOnEscape, dispatch]);

  // Блокировка скролла
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Фокус на попап
  useEffect(() => {
    if (isOpen && popupRef.current) {
      popupRef.current.focus();
    }
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (options?.closeOnOverlayClick && e.target === e.currentTarget) {
      dispatch(closePopup());
    }
  };

  const contentStyle = {
    width:
      typeof options?.width === "number"
        ? `${options.width}px`
        : options?.width,
    maxWidth:
      typeof options?.maxWidth === "number"
        ? `${options.maxWidth}px`
        : options?.maxWidth,
    height:
      typeof options?.height === "number"
        ? `${options.height}px`
        : options?.height,
    maxHeight:
      typeof options?.maxHeight === "number"
        ? `${options.maxHeight}px`
        : options?.maxHeight,
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className={s.overlay}
      onClick={handleOverlayClick}
      data-testid="popup-overlay"
    >
      <div
        ref={popupRef}
        className={s.content}
        style={contentStyle}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "popup-title" : undefined}
      >
        {(title || options?.showCloseButton) && (
          <div className={s.header}>
            {title && (
              <h2 id="popup-title" className={s.title}>
                {title}
              </h2>
            )}
            {options?.showCloseButton && (
              <button
                className={s.closeButton}
                onClick={() => dispatch(closePopup())}
                aria-label="Close popup"
              >
                &times;
              </button>
            )}
          </div>
        )}
        <div className={s.body}>{content}</div>
      </div>
    </div>,
    document.body
  );
}
