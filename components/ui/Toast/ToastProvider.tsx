"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import type {
  ReactNode,
} from "react";

import {
  Toast,
} from "./Toast";

import type {
  ToastData,
  ToastPosition,
  ToastVariant,
} from "./Toast";

import styles from "./ToastProvider.module.css";


export interface ShowToastOptions {
  title?: string;

  message: string;

  variant?: ToastVariant;

  duration?: number;
}


interface ToastContextValue {
  showToast: (
    options: ShowToastOptions
  ) => void;

  dismissToast: (
    id: string
  ) => void;
}


const ToastContext =
  createContext<
    ToastContextValue | undefined
  >(undefined);


interface ToastProviderProps {
  children: ReactNode;

  position?: ToastPosition;
}


export function ToastProvider({
  children,

  position = "top-right",
}: ToastProviderProps) {
  const [
    toasts,
    setToasts,
  ] = useState<ToastData[]>([]);


  const dismissToast =
    useCallback(
      (id: string) => {
        setToasts(
          (currentToasts) =>
            currentToasts.filter(
              (toast) =>
                toast.id !== id
            )
        );
      },
      []
    );


  const showToast =
    useCallback(
      ({
        title,

        message,

        variant = "info",

        duration = 4000,
      }: ShowToastOptions) => {
        const id =
          `${Date.now()}-${Math.random()}`;


        const toast: ToastData = {
          id,

          title,

          message,

          variant,
        };


        setToasts(
          (currentToasts) => [
            ...currentToasts,

            toast,
          ]
        );


        if (
          duration > 0
        ) {
          window.setTimeout(
            () => {
              dismissToast(id);
            },

            duration
          );
        }
      },

      [
        dismissToast,
      ]
    );


  const contextValue =
    useMemo(
      () => ({
        showToast,

        dismissToast,
      }),

      [
        showToast,

        dismissToast,
      ]
    );


  return (
    <ToastContext.Provider
      value={
        contextValue
      }
    >
      {children}

      <div
        className={[
          styles.container,

          styles[position],
        ].join(" ")}
        aria-live="polite"
        aria-atomic="false"
      >
        {toasts.map(
          (toast) => (
            <Toast
              key={toast.id}
              {...toast}
              onClose={() =>
                dismissToast(
                  toast.id
                )
              }
            />
          )
        )}
      </div>
    </ToastContext.Provider>
  );
}


export function useToast() {
  const context =
    useContext(
      ToastContext
    );


  if (!context) {
    throw new Error(
      "useToast must be used inside ToastProvider"
    );
  }


  return context;
}