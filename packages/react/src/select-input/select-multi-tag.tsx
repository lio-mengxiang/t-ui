'use client';

import React from 'react';
import { InputTag } from '../input-tag';
import type { SelectMultiTagProps } from '../select/interface';

export const SelectMultiTag = ({ renderTag }: SelectMultiTagProps) => {
  return <InputTag.Tag renderTag={renderTag} />;
};
