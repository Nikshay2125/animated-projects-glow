
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Container = ({ children, className, id }: ContainerProps) => {
  return (
    <div 
      id={id}
      className={cn(
        "container mx-auto px-4 md:px-6 py-10 md:py-16",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
