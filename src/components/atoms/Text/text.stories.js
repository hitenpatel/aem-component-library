import React from 'react'
import Text from './index'
import { withKnobs, text } from '@storybook/addon-knobs'
export default { title: 'Text Component', decorators: [withKnobs]}
export const Text_ = () => {
  const textContent = text('Text', 'This is a test string');
  const attributes = {
    id: 'test',
    data: ['data-rte-editelement']
  };
  return <Text attributes={attributes} textContent={textContent}></Text>
}