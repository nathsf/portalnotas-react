
import React, { useState } from "react";
import { Table, Pagination, Checkbox } from 'rsuite';
import fakeData from "./data.json";
const { Column, HeaderCell, Cell } = Table;


const CheckCell = ({ rowData, onChange, checkedKeys, dataKey, ...props }) => (
    <Cell {...props} style={{ padding: 0 }}>
        <div style={{ lineHeight: '46px' }}>
            <Checkbox
                value={rowData[dataKey]}
                inline
                onChange={onChange}
                checked={checkedKeys.some(item => item === rowData[dataKey])}
            />
        </div>
    </Cell>
);


export default function NotasTable() {
    const [dataTable, setDataTable] = React.useState(
        fakeData.filter((item, index) => index < 7)
    );
    const [columns, setColumns] = React.useState([
        { id: "id", name: "#", width: 60 },
        { id: "code", name: "Código", width: 100 },
        { id: "name", name: "Alumno", width: 200 },
        { id: "career", name: "Carrera", width: 220 },
        { id: "datelimit", name: "Fecha de Vencimiento", width: 150 },
        { id: "score", name: "Nota", width: 60 },
        { id: "digit", name: "Digitado", width: 150 },
        { id: "isActive", name: "Estado Estudiante", width: 100 }
    ]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const handleChangeLimit = dataKey => {
        setPage(1);
        setLimit(dataKey);
    };

    const data = fakeData.filter((v, i) => {
        const start = limit * (page - 1);
        const end = start + limit;
        return i >= start && i < end;
    });
    const [checkedKeys, setCheckedKeys] = React.useState([]);
    let checked = false;
    let indeterminate = false;

    if (checkedKeys.length === data.length) {
        checked = true;
    } else if (checkedKeys.length === 0) {
        checked = false;
    } else if (checkedKeys.length > 0 && checkedKeys.length < data.length) {
        indeterminate = true;
    }

    const handleCheckAll = (value, checked) => {
        const keys = checked ? data.map(item => item.id) : [];
        setCheckedKeys(keys);
    };
    const handleCheck = (value, checked) => {
        const keys = checked ? [...checkedKeys, value] : checkedKeys.filter(item => item !== value);
        setCheckedKeys(keys);
    };

    return (
        <div>
            <Table height={420} data={data} id="table">
            <Column width={50} align="center">
        <HeaderCell style={{ padding: 0 }}>
          <div style={{ lineHeight: '40px' }}>
            <Checkbox
              inline
              checked={checked}
              indeterminate={indeterminate}
              onChange={handleCheckAll}
            />
          </div>
        </HeaderCell>
        <CheckCell dataKey="id" checkedKeys={checkedKeys} onChange={handleCheck} />
      </Column>
                {columns.map((column) => (
                    <>
                        
                        <Column width={column.width} key={column.id} fixed>
                            <HeaderCell id={column.id}>{column.name}</HeaderCell>
                            
                                <Cell dataKey={column.id} />
                        </Column></>
                ))}
            </Table>
            <div style={{ padding: 20 }}>
                <Pagination
                    prev
                    next
                    first
                    last
                    ellipsis
                    boundaryLinks
                    maxButtons={5}
                    size="xs"
                    layout={['total', '-', 'limit', '|', 'pager', 'skip']}
                    total={fakeData.length}
                    limitOptions={[10, 30, 50]}
                    limit={limit}
                    activePage={page}
                    onChangePage={setPage}
                    onChangeLimit={handleChangeLimit} />
            </div>
        </div>
    );
}
