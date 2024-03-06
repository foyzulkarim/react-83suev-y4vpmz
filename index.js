import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './Demo';
import GitStreamCard from './GitStreamCard'

const feedItems = [ 
  { type: 'commit', title: 'Add initial implementation of dark mode', },
  { type: 'pullRequest', title: 'Dark mode feature and UI improvements', prNumber: 876, repository: 'acme/project' },
  { type: 'note', title: 'Best practices for dark mode in React', content: 'Interesting insights on...' },
];

const renderFeed = () => {
  return feedItems.map((item) => (
    <GitStreamCard key={item.id} type={item.type} title={item.title} {...item} /> 
  ));
};


ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      {renderFeed()}
    </StyledEngineProvider>
  </React.StrictMode>
);