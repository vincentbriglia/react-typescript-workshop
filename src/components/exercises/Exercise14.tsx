import classnames from 'classnames';
import React, { createContext, FunctionComponent, useContext, useState } from 'react';

export interface ITabsContext {
  activeIndex: number;
  setActiveIndex(index: number): void;
}

export const TabsContext = createContext<ITabsContext | undefined>(undefined);

export const useTabsContext = () => {
  const context = useContext(TabsContext);

  if (context) {
    return context;
  }

  throw new Error('useTabsContext should only be called within a child of a Tabs component');
};

/**
 *
 * TAB
 *
 */

interface ITabProps {
  children: React.ReactNode;
  index?: number;
}

export const Tab: FunctionComponent<ITabProps> = ({ children, index }) => {
  const { activeIndex, setActiveIndex } = useTabsContext();

  // this is ensuring TypeScript is satisfied, we are never passing an index to the React component
  // directly, but the TabList injects the index after the fact, hence we need this safeguard
  if (index === undefined) {
    // tslint:disable-next-line:no-null-keyword
    return null;
  }

  const className = classnames('item', {
    active: activeIndex === index,
  });

  return (
    <div className={className} onClick={() => setActiveIndex(index)}>
      {children}
    </div>
  );
};

/**
 *
 * TABLIST
 *
 */

interface ITabListProps {
  children: Array<React.ReactElement<ITabProps>>;
}

export const TabList: FunctionComponent<ITabListProps> = ({ children }) => {
  return (
    <div className="ui top attached tabular menu">
      {React.Children.map(
        children,
        (child: React.ReactElement<ITabProps>, index) =>
          child &&
          React.cloneElement(child, {
            index,
            ...child.props,
          })
      )}
    </div>
  );
};

/**
 *
 * TABPANEL
 *
 */

// tslint:disable-next-line:no-empty-interface
interface ITabPanelProps {}

export const TabPanel: FunctionComponent<ITabPanelProps> = ({ children }) => {
  return <div className="ui bottom attached active tab segment">{children}</div>;
};

/**
 *
 * TABSPANEL
 *
 */

interface ITabPanelsProps {
  children: Array<React.ReactElement<ITabPanelProps>>;
}

export const TabPanels: FunctionComponent<ITabPanelsProps> = ({ children }) => {
  const { activeIndex } = useTabsContext();
  const activeChild = children[activeIndex];

  return React.cloneElement(activeChild, {
    ...activeChild.props,
  });
};

interface ITabsSubComponents {
  Tab: typeof Tab;
  TabList: typeof TabList;
  TabPanel: typeof TabPanel;
  TabPanels: typeof TabPanels;
}

interface ITabsProps {
  children: React.ReactNodeArray;
  initialActiveIndex?: number;
  activeIndex?: number;
}

type TabsComponent = FunctionComponent<ITabsProps> & ITabsSubComponents;

export const Tabs: TabsComponent = ({ children, initialActiveIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>{children}</TabsContext.Provider>
  );
};

Tabs.TabList = TabList;
Tabs.Tab = Tab;
Tabs.TabPanels = TabPanels;
Tabs.TabPanel = TabPanel;

export const Exercise14: FunctionComponent = () => {
  return (
    <Tabs initialActiveIndex={1}>
      <Tabs.TabList>
        <Tabs.Tab>Tab #1</Tabs.Tab>
        <Tabs.Tab>Tab #2</Tabs.Tab>
        <Tabs.Tab>Tab #3</Tabs.Tab>
      </Tabs.TabList>
      <Tabs.TabPanels>
        <Tabs.TabPanel>Tab #1 Content</Tabs.TabPanel>
        <Tabs.TabPanel>Tab #2 Content</Tabs.TabPanel>
        <Tabs.TabPanel>Tab #3 Content</Tabs.TabPanel>
      </Tabs.TabPanels>
    </Tabs>
  );
};
