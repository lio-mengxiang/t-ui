import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
const Card = () => {
  return (
    <div className="max-w-sm w-full rounded-2xl border border-purple-100 bg-white shadow-md p-5 space-y-4 pointer-events-auto mb-2">
      <div className="flex items-center space-x-2">
        <IconTLogo className="w-6 h-6" />
        <span className="font-medium text-gray-700">Card</span>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-900">UI Library</h2>
        <p className="text-sm text-gray-500">$3,500 – 5,500 net</p>
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 text-xs rounded-full bg-purple-50 text-purple-600 font-medium">Project Based</span>
        <span className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-600 font-medium">Remote</span>
        <span className="px-3 py-1 text-xs rounded-full bg-pink-50 text-pink-600 font-medium">Full Time</span>
      </div>

      <div className="text-xs text-gray-400">Posted 2 days ago</div>
    </div>
  );
};

function App() {
  return (
    <TButton
        status="primary"
        onClick={() =>
          toastStore.add({
            duration: 3,
            component: <Card />,
          })
        }
      >
        custom message
    </TButton>
  );
}
`;

export function CustomExample() {
  return <CodePreview code={code} />;
}
