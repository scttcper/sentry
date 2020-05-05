import React from 'react';

import Tag from 'app/views/settings/components/tag';

import {BreadcrumbLevelType} from '../breadcrumbs/types';

type Props = Pick<Tag, 'size'> & {
  level?: BreadcrumbLevelType;
};

const BreadcrumbLevelTag = ({level, size}: Props) => {
  switch (level) {
    case BreadcrumbLevelType.FATAL:
    case BreadcrumbLevelType.ERROR:
      return (
        <Tag priority="error" size={size}>
          {level}
        </Tag>
      );
    case BreadcrumbLevelType.INFO:
      return (
        <Tag priority="info" size={size}>
          {level}
        </Tag>
      );
    case BreadcrumbLevelType.WARNING:
      return (
        <Tag priority="warning" size={size}>
          {level}
        </Tag>
      );
    default:
      return <Tag size={size}>{level}</Tag>;
  }
};

const BreadcrumbLevel = ({level, size}: Props) => (
  <div>
    <BreadcrumbLevelTag level={level} size={size} />
  </div>
);

export default BreadcrumbLevel;
