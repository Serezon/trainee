/* eslint-disable */
import React from 'react';

import { storiesOf } from '@storybook/react';
import Button from '../src/app/components/button/Button'
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

// import { Button, Welcome } from '@storybook/react/demo';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));
storiesOf('Button', module)
  .addParameters({ jest: ['Button'] })
  .add('just render button', () => <Button logout={() => alert('log')} />)
