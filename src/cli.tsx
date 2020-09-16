import React from 'react';
import {render, Text, Box} from 'ink';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';
import SelectInput from 'ink-select-input';
import open from 'open';

const openURL = (url: string) => open(url, { wait: false });

const items = [
  {
    label: 'HomePage',
    value: 'yunboo-site.vercel.app',
  },
  {
    label: 'Twitter',
    value: 'https://twitter.com/yun8boo',
  },
  {
    label: 'Facebook',
    value: 'https://www.facebook.com/yun8boo',
  },
  {
    label: 'GitHub',
    value: 'https://github.com/yun8boo',
  },
  {
    label: 'Qiita',
    value: 'https://qiita.com/yun8boo',
  },
];

const handleOnSelect = (key: string) => {
  switch (key) {
    case 'HomePage':
      openURL('https://yunboo-site.vercel.app');
      break;
    case 'Twitter':
      openURL('https://twitter.com/yun8boo');
      break;
    case 'Facebook':
    openURL('https://www.facebook.com/yun8boo');
      break;
    case 'GitHub':
      openURL('https://github.com/yun8boo');
      break;
    case 'Qiita':
      openURL('https://qiita.com/yun8boo');
      break;
  }
  process.exit();
};

const ItemView = ({ label, isSelected }) => (
  <Text color={isSelected && '#71c5b0'} bold={isSelected}>{label}</Text>
);

const App = () => {
  return (
    <Box flexDirection="column" padding={1}>
      <Gradient name='teen'>
        <BigText text="yun8boo"/>
        <BigText text="cli"/>
      </Gradient>
      <SelectInput
        items={items}
        onSelect={item => handleOnSelect(item.label)}
        itemComponent={ItemView}
      />
    </Box>
  )
};

render(<App />);