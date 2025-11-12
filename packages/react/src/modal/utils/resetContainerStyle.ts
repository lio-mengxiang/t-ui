export const resetContainerStyle = ({ needResetContainerStyle, container, originContainerStyle }) => {
  if (needResetContainerStyle.current && container) {
    const originStyle = originContainerStyle.current;
    // eslint-disable-next-line no-return-assign
    Object.keys(originStyle).forEach((i) => (container.style[i] = originStyle[i]));
  }
  needResetContainerStyle.current = false;
  originContainerStyle.current = {};
};
