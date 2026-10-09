"use client";

import {
  createContext,
  useContext,
  type ReactNode,
} from "react";

import { toast } from "sonner";

interface NotificationContextValue {
  success: (message: string) => void;
  error: (message: string) => void;
  info: (message: string) => void;
  warning: (message: string) => void;
}

const NotificationContext =
  createContext<NotificationContextValue | undefined>(
    undefined
  );

export function NotificationProvider({
  children,
}: {
  children: ReactNode;
}) {
  function success(message: string) {
    toast.success(message);
  }

  function error(message: string) {
    toast.error(message);
  }

  function info(message: string) {
    toast.info(message);
  }

  function warning(message: string) {
    toast.warning(message);
  }

  return (
    <NotificationContext.Provider
      value={{
        success,
        error,
        info,
        warning,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error(
      "useNotification must be used inside NotificationProvider"
    );
  }

  return context;
}