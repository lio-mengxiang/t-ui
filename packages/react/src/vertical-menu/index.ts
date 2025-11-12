import { MenuContext } from './menu-context';
import { SubMenuContext } from './sub-menu-context';
import { VerticalMenuRoot } from './vertical-menu';
import { VerticalSubMenu } from './vertical-sub-menu';
import { VerticalSubMenuContent } from './vertical-sub-menu-content';
import { VerticalMenuItem } from './vertical-sub-menu-item';
import { VerticalSubMenuList } from './vertical-sub-menu-list';

const VerticalMenu = {
  Root: VerticalMenuRoot,
  Submenu: VerticalSubMenu,
  SubMenuContent: VerticalSubMenuContent,
  SubMenuList: VerticalSubMenuList,
  MenuItem: VerticalMenuItem,
  MenuContext,
  SubMenuContext,
};

export { VerticalMenu };
export * from './interface';
