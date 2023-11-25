import React from 'react';
import {
 Card as UICard,
 CardContent,
 CardHeader,
 CardTitle,
} from '@/components/ui/card';

interface CardProps {
 title?: string;
 description?: string;
 subtext?: string;
 label?: string;
}

const Card = ({ title, description, subtext, label }: CardProps) => {
 return (
  <UICard className="bg-default">
   <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
    {title && (
     <CardTitle className="text-sm font-medium">
      {label && <div className="text-2xl font-bold">{label}</div>}
      {title}
     </CardTitle>
    )}
   </CardHeader>

   <CardContent>
    {description && (
     <div className="text-2xl font-bold mb-1">{description}</div>
    )}
    {subtext && (
     <p className="text-xs text-muted-foreground max-w-xs">{subtext}</p>
    )}
   </CardContent>
  </UICard>
 );
};

export default Card;
