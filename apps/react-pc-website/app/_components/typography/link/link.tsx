'use client';

import React from 'react';

export function Link(props: { href: string; children: React.ReactNode }) {
  return (
    <a
      className="text-blue-600 underline underline-offset-2 hover:text-blue-800 hover:underline transition-colors duration-200 cursor-pointer"
      href={props.href}
      target="_blank"
      rel="noreferrer"
    >
      {props.children}
    </a>
  );
}
