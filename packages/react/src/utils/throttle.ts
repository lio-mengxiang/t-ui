export type TrailingThrottledFunction<T extends (...args: any[]) => any> = {
  (...args: Parameters<T>): void;
  cancel(): void;
};

export function trailingThrottle<T extends (...args: any[]) => any>(func: T, wait: number): TrailingThrottledFunction<T> {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  const throttle = (...args: Parameters<T>) => {
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        func(...args);
      }, wait);
    }
  };

  throttle.cancel = () => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return throttle;
}

export type LeadingThrottledFunction<T extends (...args: any[]) => any> = {
  (...args: Parameters<T>): void;
};

export function leadingThrottle<T extends (...args: any[]) => any>(func: T, wait: number): LeadingThrottledFunction<T> {
  let previous = 0;

  const throttle = (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - previous > wait) {
      func(...args);
      previous = now;
    }
  };

  return throttle;
}
