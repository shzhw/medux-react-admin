import {createForm, getFormDecorators} from 'common/utils';

import {FormComponentProps} from 'antd/lib/form';
import {Input} from 'antd';
import {ListSearch} from 'entity/role';
import PurviewSelector from 'components/PurviewSelector';
import React from 'react';
import SearchForm from 'components/SearchForm';
import {connect} from 'react-redux';

interface StoreProps {
  listSearch?: ListSearch;
}

interface OwnProps {
  fixedFields?: Partial<ListSearch>;
  defaultSearch?: Partial<ListSearch>;
  disableRoute?: boolean;
}
class Component extends React.PureComponent<StoreProps & FormComponentProps & DispatchProp & OwnProps> {
  private onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.stopPropagation();
    event.preventDefault();
    const {form, dispatch, disableRoute, fixedFields = {}} = this.props;
    form.validateFields((errors, values: ListSearch) => {
      if (!errors) {
        Object.assign(values, fixedFields);
        values.pageCurrent = 1;
        values.sorterField = undefined;
        values.sorterOrder = undefined;
        dispatch(actions.adminRole.searchList(values, 'current', undefined, disableRoute));
      }
    });
  };
  private onReset = () => {
    this.props.dispatch(actions.adminRole.searchList(this.props.defaultSearch || {}, 'default', undefined, this.props.disableRoute));
  };
  public render() {
    const {fixedFields, form} = this.props;
    const formDecorators = getFormDecorators<ListSearch>(form);
    const items = [
      {label: '角色名称', item: formDecorators.roleName(<Input autoComplete="off" allowClear={true} placeholder="请输入角色名称" />)},
      {
        label: '用户权限',
        col: 2,
        item: formDecorators.purviews(<PurviewSelector mode="multiple" />),
      },
    ];
    return (
      <div className="g-search">
        <SearchForm disableFields={fixedFields && Object.keys(fixedFields)} onReset={this.onReset} onSubmit={this.onSubmit} items={items}></SearchForm>
      </div>
    );
  }
}

const mapStateToProps: (state: RootState) => StoreProps = state => {
  return {listSearch: state.adminRole!.routeParams?.listSearch};
};
const mapPropsToFields = (props: StoreProps) => {
  return {
    ...props.listSearch,
  };
};
export default connect(mapStateToProps)(createForm(Component, mapPropsToFields));
