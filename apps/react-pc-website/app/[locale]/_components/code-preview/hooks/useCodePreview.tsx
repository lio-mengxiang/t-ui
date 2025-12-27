'use client';

import { useState, type ComponentType } from 'react';
import { generateElement } from '../utils';
import type { CodePreviewProps } from '../interface';
import { useUpdate } from './use-update';

type ProviderState = {
  element?: ComponentType | null;
  error?: string;
};

export function useCodePreview(props: CodePreviewProps) {
  const { code, dependencies } = props;

  const [state, setState] = useState<ProviderState>(initState(code));

  function initState(code: string | undefined) {
    if (!code) {
      return { error: undefined, element: undefined };
    }

    const errorCallback = (error: Error) => {
      setState({ error: error.toString(), element: undefined });
    };

    try {
      if (typeof code !== 'string') {
        throw new Error('Code failed to transform');
      }

      return { error: undefined, element: generateElement({ input: code, dependencies, errorCallback }) };
    } catch (error: any) {
      return { error: error.toString(), element: undefined };
    }
  }

  async function transpileAsync(newCode: string) {
    const errorCallback = (error: Error) => {
      setState({ error: error.toString(), element: undefined });
    };

    try {
      const transformedCode = await Promise.resolve(newCode);
      const renderElement = (element: ComponentType) => setState({ error: undefined, element });

      if (typeof transformedCode !== 'string') {
        throw new Error('Code failed to transform');
      }

      renderElement(generateElement({ input: transformedCode, dependencies: props.dependencies, errorCallback }));
    } catch (error) {
      return errorCallback(error as Error);
    }
  }

  const onError = (error: Error) => setState({ error: error.toString() });

  useUpdate(() => {
    if (code) {
      transpileAsync(code).catch(onError);
    }
  }, [code, dependencies]);

  const onChange = (newCode: string) => {
    transpileAsync(newCode).catch(onError);
  };

  return {
    state,
    onChange,
  };
}
