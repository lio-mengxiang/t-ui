import { fillNBSP, isArray, isNumber, isString } from '../../utils';
import type { SelectRootProps, OptionData } from '../interface';

export type OptionInfoMap = Map<OptionData['value'], OptionData>;

export function flatChildren(
  { options, filterOption }: Pick<SelectRootProps, 'options' | 'filterOption'>,
  {
    inputValue = '',
  }: {
    inputValue: string;
  },
  {
    optionInfoMap = new Map(),
    optionValueList = [],
    customNodeCount = 0,
    isGroup = false,
  }: {
    optionInfoMap?: OptionInfoMap;
    optionValueList?: Array<OptionData['value']>;
    // 自定义节点的数量，用于此节点 key 的生成
    customNodeCount?: number;
    // 【新增】类型定义
    isGroup?: boolean;
  } = {},
) {
  // 经过 value 去重的选项数据数组
  let childrenList: Array<OptionData> = [];

  const getChildKey = ({ label, value }, key?, isGroupTitle?) => {
    if (!label && !value && !key) {
      customNodeCount++;
      return `custom_node_${customNodeCount}`;
    }

    return isGroupTitle ? `group_${customNodeCount}` : `option_${customNodeCount}`;
  };

  const handleOption = (
    option: { label: string | number; value: string | number; disabled?: boolean; extra?: any },
    origin: OptionData['_origin'],
  ) => {
    const optionValue = option.value;

    // 过滤选项
    let isValidOption = true;
    if (filterOption === true) {
      isValidOption = optionValue !== undefined && String(optionValue).toLowerCase().indexOf(inputValue.toLowerCase()) !== -1;
    } else if (typeof filterOption === 'function') {
      isValidOption = !inputValue || filterOption(inputValue, option);
    }

    const existOption = optionInfoMap.get(optionValue);

    // we don't allow two options with same value
    if (!existOption) {
      const _key = getChildKey(option);
      const index = optionInfoMap.size;

      const optionData: OptionData = {
        label: option.label,
        value: optionValue,
        disabled: option.disabled,
        extra: option.extra,
        _key,
        _index: index,
        _origin: origin,
        _valid: isValidOption,
        // 【新增】如果是后代元素，增加 grouped 属性
        grouped: isGroup ? true : undefined,
      };

      optionInfoMap.set(optionValue, optionData);
      optionValueList.push(optionValue);

      if (isValidOption) {
        childrenList.push(optionData);
      }
    }
  };

  if (isArray(options) && options.length) {
    (options as SelectRootProps['options']).forEach((option) => {
      // 标准化选项格式
      if (isString(option) || isNumber(option)) {
        option = {
          label: option,
          value: option,
        };
      }

      // 处理 OptGroup
      if (option.children && isArray(option.children)) {
        // 【关键修改】在递归时，将 isGroup 设为 true
        const { childrenList: _childrenList } = flatChildren(
          { options: option.children, filterOption },
          { inputValue },
          { optionInfoMap, optionValueList, customNodeCount, isGroup: true },
        );

        if (_childrenList.length) {
          const _key = getChildKey(option, null, true);
          // 添加 group 标题数据
          childrenList.push({
            label: option.label,
            value: _key,
            disabled: option.disabled === true,
            extra: option.extra,
            _key,
            _index: -1,
            _origin: 'options',
            _valid: true,
            isGroupTitle: true,
          });

          childrenList = childrenList.concat(_childrenList);
        }
      } else {
        handleOption(
          {
            label: fillNBSP(option.label),
            value: option.value,
            disabled: option.disabled === true,
            extra: option.extra,
          },
          'options',
        );
      }
    });
  }

  return {
    childrenList,
    optionInfoMap,
    optionValueList,
  };
}
