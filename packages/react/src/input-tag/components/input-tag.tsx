'use client';
import React, { useMemo } from 'react';
import { mergedRenderTag } from '../utils';
import { useInputInnerTagContext } from '../inner-context';
import type { InputTagProps, ObjectValueType } from '../interface';

export function InputTag(props: InputTagProps) {
  const { value, setValue, readOnly, disabled, onRemove, labelInValue, maxTagCount, onChange } = useInputInnerTagContext();

  const {
    renderTag = ({ label, closable, onClose }, index) => (
      <span key={index}>
        {label} {closable && <span onClick={onClose}>&times;</span>}
      </span>
    ),
  } = props;

  // 处理 maxTagCount 参数
  const maxTagCountValue = useMemo(() => {
    if (typeof maxTagCount === 'object') {
      return maxTagCount.count;
    }
    return maxTagCount;
  }, [maxTagCount]);

  // 计算可见标签列表和隐藏数量
  const { visibleList, hiddenList } = useMemo(() => {
    let visibleList = value;
    let hiddenList: ObjectValueType[] = [];

    // 只有当 maxTagCountValue 是有效数字且小于 value 长度时才进行切片
    if (typeof maxTagCountValue === 'number' && maxTagCountValue >= 0 && maxTagCountValue < value.length) {
      visibleList = value.slice(0, maxTagCountValue);
      hiddenList = value.slice(maxTagCountValue);
    }

    return { visibleList, hiddenList };
  }, [value, maxTagCountValue]);

  const renderEllipsisNode = (hiddenList: ObjectValueType[]) => {
    if (typeof maxTagCount === 'object' && maxTagCount.render) {
      return maxTagCount.render(hiddenList);
    }
    return <>+{hiddenList.length}</>;
  };

  return (
    <>
      {/* 只遍历可见的标签 */}
      {visibleList.map((item, index) => {
        return mergedRenderTag({
          readOnly,
          item,
          disabled,
          index,
          renderTag,
          value,
          onRemove,
          setValue,
          onChange,
          labelInValue,
        });
      })}

      {/* 省略的标签 */}
      {hiddenList?.length > 0 && renderEllipsisNode(hiddenList)}
    </>
  );
}
