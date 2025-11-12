import React from 'react';
// app/loading.tsx
export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-70"></div>
    </div>
  );
}
