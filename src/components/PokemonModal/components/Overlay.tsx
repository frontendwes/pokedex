import { ReactNode } from "react";

interface OverlayProps {
  children: ReactNode;
}

export const Overlay = ({ children }: OverlayProps) => {
  return (
    <div className="fixed z-10 top-0 left-0 right-0 bottom-0 bg-black/20 flex items-center justify-center not-sr-only">
      {children}
    </div>
  );
};
