import {
 Tabs as UITabs,
 TabsContent,
 TabsList,
 TabsTrigger,
} from '@/components/ui/tabs';
import React from 'react';

const Tabs = () => {
 return (
  <UITabs defaultValue="overview" className="space-y-4">
   <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="analytics" disabled>
     Analytics
    </TabsTrigger>
    <TabsTrigger value="reports" disabled>
     Reports
    </TabsTrigger>
    <TabsTrigger value="notifications" disabled>
     Notifications
    </TabsTrigger>
   </TabsList>
   <TabsContent value="overview" className="space-y-4"></TabsContent>
  </UITabs>
 );
};
export default Tabs;
