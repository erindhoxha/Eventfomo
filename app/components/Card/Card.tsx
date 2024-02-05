import React from "react";
import {
  Card as UICard,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardProps {
  title?: string;
  description?: string;
  subtitle?: string;
}

const Card = ({ title, description, subtitle }: CardProps) => {
  return (
    <UICard className="bg-default">
      <CardHeader className="flex flex-column space-y-0 pb-2">
        {subtitle && (
          <CardTitle className="text-sm font-medium">{subtitle}</CardTitle>
        )}
      </CardHeader>

      <CardContent>
        {title && <div className="text-2xl font-bold mb-1">{title}</div>}
        {description && (
          <p className="text-xs lg:text-sm text-muted-foreground max-w-xs">
            {description}
          </p>
        )}
      </CardContent>
    </UICard>
  );
};

export default Card;
