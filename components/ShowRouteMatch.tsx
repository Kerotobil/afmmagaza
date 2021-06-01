import React from 'react';
import { useRouteMatch } from 'react-router';

export default function ShowRouteMatch() {
  const match = useRouteMatch();

  return (
    <div>
      <pre>{JSON.stringify(match, null, 2)}</pre>
    </div>
  );
}
