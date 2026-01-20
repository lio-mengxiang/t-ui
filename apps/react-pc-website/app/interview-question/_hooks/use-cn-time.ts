"use client";

import { useState, useEffect } from "react";

export function useCNTime() {
  const TZ = "Asia/Shanghai";
  const TZ_ABBR = "[CN]"; // 你自己定义的英文缩写标签

  const getCNTime = () => {
    const formatter = new Intl.DateTimeFormat("zh-CN", {
      timeZone: TZ,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    return formatter.format(new Date()); // "09:01"
  };

  const [value, setValue] = useState(() => ({
    time: getCNTime(),
    tz: TZ_ABBR,
  }));

  useEffect(() => {
    const id = setInterval(() => {
      setValue({
        time: getCNTime(),
        tz: TZ_ABBR,
      });
    }, 60 * 1000);

    return () => clearInterval(id);
  }, []);

  return value;
}
