import { ListEntity } from '@/app/types/globl';

export type SubMenuType = Array<ListEntity & { subValue: string }>;

export type NavList = Array<
  ListEntity & {
    submenu: SubMenuType;
  }
>;

export type DirListType = Array<
  ListEntity & {
    subValue: string;
  }
>;

export type TreeListProps = Array<ListEntity>;
export type HelperList = Array<ListEntity>;
