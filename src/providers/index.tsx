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

/**import { AuthProvider } from "./auth";
import { ReactNode } from "react";
import { RegisterProvider } from "./register";
import { CartProvider } from "./cart";

interface ProviderData {
  children: ReactNode;
}

const ProvidersGathered = ({ children }: ProviderData) => {
  return (
    <AuthProvider>
      <RegisterProvider>
        <CartProvider>{children}</CartProvider>
      </RegisterProvider>
    </AuthProvider>
  );
};

export default ProvidersGathered; */
