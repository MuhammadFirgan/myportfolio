import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import React from "react";

// Definisikan props untuk komponen CustomButton
interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean;
  children: React.ReactNode;
}

export default function CustomButton({ isLoading, children, ...props }: CustomButtonProps) {
  return (
    <Button 
      type="submit" 
      className="bg-primary w-full" 
      disabled={isLoading}
      {...props} // Gunakan rest props untuk menyebarkan atribut lain
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Memproses...
        </>
      ) : (
        children
      )}
    </Button>
  );
}