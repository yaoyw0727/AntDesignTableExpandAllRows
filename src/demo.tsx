import React, { useEffect } from "react";
import "./index.css";
import { useState } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { CaretDownOutlined, CaretRightOutlined } from "@ant-design/icons";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  children?: any;
}

const data: DataType[] = [
  {
    key: 0,
    name: "John Brown sr.",
    age: 60,
    address: "New York No. 1 Lake Park",
    children: [
      {
        key: 1,
        name: "John Brown",
        age: 42,
        address: "New York No. 2 Lake Park"
      },
      {
        key: 2,
        name: "John Brown jr.",
        age: 30,
        address: "New York No. 3 Lake Park",
        children: [
          {
            key: 3,
            name: "Jimmy Brown",
            age: 16,
            address: "New York No. 3 Lake Park"
          }
        ]
      },
      {
        key: 4,
        name: "Jim Green sr.",
        age: 72,
        address: "London No. 1 Lake Park",
        children: [
          {
            key: 5,
            name: "Jim Green",
            age: 42,
            address: "London No. 2 Lake Park",
            children: [
              {
                key: 6,
                name: "Jim Green jr.",
                age: 25,
                address: "London No. 3 Lake Park"
              },
              {
                key: 7,
                name: "Jimmy Green sr.",
                age: 18,
                address: "London No. 4 Lake Park"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    key: 8,
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park"
  }
];

const Demo: React.FC = () => {
  const [expandedRowKeys, setExpandedRowKeys] = useState<any>([]);
  const keys = [0, 2, 4, 5];
  const handleClick = () => {
    setExpandedRowKeys(expandedRowKeys.length ? [] : keys);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: (
        <div>
          <span>Name</span>
          {expandedRowKeys?.length ? (
            <CaretDownOutlined />
          ) : (
            <CaretRightOutlined />
          )}
          <span onClick={handleClick}>展开所有行</span>
        </div>
      ),
      dataIndex: "name",
      key: "name"
    },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Address", dataIndex: "address", key: "address" }
  ];

  return (
    <Table
      columns={columns}
      expandable={{
        expandedRowKeys: expandedRowKeys,
        onExpandedRowsChange: (expandedRows) => {
          setExpandedRowKeys(expandedRows);
        },
        rowExpandable: (record) => record?.children?.length > 0
      }}
      dataSource={data}
      rowKey={(record, index) => record.key}
    />
  );
};

export default Demo;
