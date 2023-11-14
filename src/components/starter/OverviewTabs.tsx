import React, { FC } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/Tabs';
import OverviewComponents from './OverviewComponents';
import OverviewUtils from './OverviewUtils';

const OverviewTabs: FC = () => {
  return (
    <Tabs defaultValue="components" className="w-full">
      <TabsList>
        <TabsTrigger value="components">Components</TabsTrigger>
        <TabsTrigger value="utils">Utils</TabsTrigger>
      </TabsList>
      <TabsContent value="components">
        <OverviewComponents />
      </TabsContent>
      <TabsContent value="utils">
        <OverviewUtils />
      </TabsContent>
    </Tabs>
  );
};

export default OverviewTabs;
