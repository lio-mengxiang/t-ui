export interface TextFlipProps {
  words: string[]; // 要显示的词语
  isHover: boolean;
  stagger?: number | undefined; // 可选的延迟时间
  duration?: number; // 可选的动画持续时间
  textOneClassName?: string; // 词语的样式类
  textTwoClassName?: string; // 词语的样式类
}
