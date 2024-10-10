import React from 'react';
import { TreeListProps } from '@/app/types/list';

type Props = {
  data: TreeListProps;
};

const TreeList = ({ data }: Props) => {
  return (
    <ul className="tree-list">
      {data.map(({ id, value }) => (
        <li key={id}>{value}</li>
      ))}
    </ul>
  );
};

export default TreeList;
