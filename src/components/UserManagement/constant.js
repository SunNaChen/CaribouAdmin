import React from 'react';
import { Tag, Popconfirm } from 'antd';

export const columns = (deleteConfirm, deleteCancel, showModal) => {
  return [
    {
      title: '用户名',
      dataIndex: 'username',
    },
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '邮箱',
      dataIndex: 'mail',
    },
    {
      title: '手机号',
      dataIndex: 'phone',
    },
    {
      title: '所在部门',
      dataIndex: 'department',
      filters: [
        {
          text: '设备部',
          value: '设备部',
        },
        {
          text: '材料部',
          value: '材料部',
        },
      ],
      onFilter: (value, record) => record.department.indexOf(value) === 0,
    },
    {
      title: '所在岗位',
      dataIndex: 'post',
      filters: [
        {
          text: '工程师',
          value: '工程师',
        },
        {
          text: '专员',
          value: '专员',
        },
      ],
      onFilter: (value, record) => record.post.indexOf(value) === 0,
    },
    {
      title: '状态',
      dataIndex: 'status',
      render: text => {
        return <Tag color={'blue'}>{text}</Tag>
      },
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
    },
    {
      title: '操作',
      dataIndex: 'id',
      render: (value, item) => {
        return <div><a onClick={() => showModal(item)}>修改 </a>
          <Popconfirm
            title="是否确认删除？"
            onConfirm={deleteConfirm}
            onCancel={deleteCancel}
            okText="确定"
            cancelText="取消"
          >
            <a href="#">删除</a>
          </Popconfirm>,
    </div>;
      },
    },
  ]
};
export const data = [
  {
    id: 1,
    username: '用户名',
    name: '姓名',
    mail: '邮箱',
    phone: '手机号',
    department: '材料部',
    post: '岗位',
    status: '正常',
    createTime: '创建日期',
    userType: '1',
    confirmpassword: '1223223',
    jaiose: '角色1',
  },
  {
    id: 2,
    username: 'sunyu',
    name: '陈老大',
    mail: '12345@qq.com',
    phone: '16678761912',
    department: '设备部',
    post: '工程师',
    status: '正常',
    createTime: '2020-1-11',
    userType: '1',
    confirmpassword: '1223223',
    jaiose: '角色1',
  },
  {
    id: 3,
    username: 'yuanyuan',
    name: '陈老二',
    mail: '1312345@qq.com',
    phone: '16678761912',
    department: '设备部',
    post: '专员',
    status: '正常',
    createTime: '2020-1-12',
    userType: '1',
    confirmpassword: '1223223',
    jaiose: '角色1',
  },
  {
    id: 4,
    username: 'xiaoyuan',
    name: '陈老三',
    mail: '12123345@qq.com',
    phone: '16678761912',
    department: '材料部',
    post: '工程师',
    status: '正常',
    createTime: '2020-1-13',
    userType: '1',
    confirmpassword: '1223223',
    jaiose: '角色1',
  },
];
