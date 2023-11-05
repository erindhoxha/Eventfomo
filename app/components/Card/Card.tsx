import {
 Card as UICard,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle,
} from '@/components/ui/card';
import React from 'react';

interface CardProps {
 label?: string;
 title?: string;
 description?: string;
 subtext?: string;
}

const Card = ({ label, title, description, subtext }: CardProps) => {
 return (
  <UICard className="bg-default">
   <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
    {title && (
     <CardTitle className="text-sm font-medium">
      {label && <div className="text-2xl font-bold">{label}</div>}
      {title}
     </CardTitle>
    )}
    {/* <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className="h-4 w-4 text-muted-foreground"
   >
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
   </svg> */}
   </CardHeader>

   <CardContent>
    {description && (
     <div className="text-2xl font-bold mb-1">{description}</div>
    )}
    {subtext && <p className="text-xs text-muted-foreground">{subtext}</p>}
   </CardContent>
  </UICard>
 );
};

export default Card;
