import {Icon} from 'antd';
// 某些全局变量必须前置引入
import React from 'react';
import {loadView as baseLoadView} from '@medux/react-web-router';
import {metaKeys} from './common/utils';

const DefLoading = () => (
  <div className="g-viewLoader">
    <Icon type="sync" spin />
  </div>
);
const loadView = (moduleName: string, viewName: never, loading: React.ComponentType<any> = DefLoading) => baseLoadView(moduleName, viewName, loading);

((data: {[key: string]: any}) => {
  Object.keys(data).forEach(key => {
    window[key] = data[key];
  });
})({metaKeys, loadView});
