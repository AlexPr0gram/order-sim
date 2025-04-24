import { useState } from 'react'
import '@mantine/core/styles.css';
import {
  Container,
  Group,
  Tabs
} from '@mantine/core';
import BaseTable from './Table/Table';

const tabs = [
  {
    id: 'all',
    caption: 'Все'
  },
  {
    id: 'new',
    caption: 'Новые'
  },
  {
    id: 'completed',
    caption: 'Выполненные'
  },
];

function App() {
  const [activeTab, setActiveTab] = useState('all');
  const items = tabs.map((tab) => (
    <Tabs.Tab value={tab.id} key={tab.id}>
      {tab.caption}
    </Tabs.Tab>
  ));

  return (
    <div className='flex-col'>
      <Container size="md">
        <Tabs
          defaultValue="all"
          variant="outline"
          visibleFrom="sm"
          value={activeTab}
          onChange={setActiveTab}
        >
          <Tabs.List>{items}</Tabs.List>
        </Tabs>
      </Container>
      <Container size="md">
        <BaseTable activeTab={activeTab}/>
      </Container>
    </div>

  )
}

export default App
