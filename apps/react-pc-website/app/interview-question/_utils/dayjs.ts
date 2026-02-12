import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import isBetween from 'dayjs/plugin/isBetween';
// 1. 加载插件
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(isBetween);

// 2. 设置默认时区为上海
dayjs.tz.setDefault('Asia/Shanghai');

export default dayjs;
