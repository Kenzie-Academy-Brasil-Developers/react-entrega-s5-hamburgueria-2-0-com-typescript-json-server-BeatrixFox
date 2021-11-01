import { ReactNode } from "react";
import { AuthProvider } from "./auth";
import { ProductsProvider } from "./products";
import { RegisterProvider } from "./register";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <ProductsProvider>
      <RegisterProvider>
        <AuthProvider>{children}</AuthProvider>;
      </RegisterProvider>
    </ProductsProvider>
  );
};

export default Providers;
