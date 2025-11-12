'use client';

import React from 'react';

export function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="leading-8 break-all whitespace-normal mb-8 mt-8">{children}</p>;
}
