
import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SatoshiButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const SatoshiButton: React.FC<SatoshiButtonProps> = ({ 
  children, 
  className, 
  variant = "default", 
  ...props 
}) => {
  return (
    <Button 
      className={cn(
        "bg-satoshi-orange hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-md transition-colors",
        className
      )} 
      {...props}
    >
      {children}
    </Button>
  );
};

export default SatoshiButton;
