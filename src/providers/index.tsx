import { ReactNode } from "react";
import { AuthProvider } from "./auth";
import { CartProvider } from "./cart";
import { RegisterProvider } from "./register";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <AuthProvider>
      <RegisterProvider>
        <CartProvider>{children}</CartProvider>
      </RegisterProvider>
    </AuthProvider>
  );
};

export default Providers;
