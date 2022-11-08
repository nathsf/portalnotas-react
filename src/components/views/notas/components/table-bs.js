// import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import { BulkCheckboxControl } from "react-bs-datatable";
import {
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  TableBody,
  TableHeader
} from "react-bs-datatable";

import TABLE_BODY from "./data.json";

// Create table headers consisting of 4 columns.
const STORY_HEADERS = [
    {
        alignment: {
          horizontal: 'center'
        },
        checkbox: {
          className: 'table-checkbox',
          idProp: 'name'
        },
        prop: 'checkbox'
      },
  {
    prop: "id",
    title: "#",
    cellProps: {
        style: function noRefCheck(){}
    }
  },
  {
    prop: "code",
    title: "DNI",
    isFilterable: true
  },
  {
    prop: "name",
    title: "Alumno",
    isFilterable: true
  },
  {
    prop: "career",
    title: "Carrera",
    isFilterable: true
  },
  {
    prop: "datelimit",
    title: "Fecha de vencimiento"
  },
  {
    prop: "score",
    title: "Nota",
    isSortable: true
  },
  {
    prop: "digit",
    title: "Digitado"
  },
  {
    prop: "isActive",
    title: "Estudiante Activo"
  },
  
];
const customLabels = {
    first: "<<",
    last: ">>",
    prev: "<",
    next: ">",
    show: "Display",
    entries: "rows",
    noResults: "There is no data to be displayed",
    filterPlaceholder: "Enter a text!",
    beforeSelect: "hola"
  };
// Then, use it in a component.
export default function BsTable() {
  return (
    <DatatableWrapper
      body={TABLE_BODY}
      headers={STORY_HEADERS}
      filterPlaceholder="tezt"
      labels={customLabels}
      paginationOptionsProps={{
        initialState: {
          rowsPerPage: 10,
          options: [5, 10, 15, 20]
        }
      }}
      sortProps={{
        sortValueObj: {
          date: function noRefCheck(){}
        }
      }}
      
    >
      <Row className="mb-2 p-2">
        <Col
          xs={12}
          lg={12}
          className="d-flex flex-col justify-content-end align-items-end px-0"
        >
          <Filter />
        </Col>
        <Col className="text-start" xs={12}>
            <BulkCheckboxControl />
        </Col>
      </Row>
      <div className="table-schedule table-nota responsive"  style={{overflow: "auto"}}>
      <Table>
        <TableHeader />
        <TableBody />
      </Table>
      </div>
      <Row className="mb-4 p-2">
       
        <Col
          xs={12}
          sm={6}
          lg={6}
          className="d-flex flex-col justify-content-lg-start align-items-center justify-content-sm-start mb-2 mb-sm-0"
        >
          <PaginationOptions />
        </Col>
        <Col
          xs={12}
          sm={6}
          lg={6}
          className="d-flex flex-col justify-content-end align-items-end"
        >
          <Pagination />
        </Col>
        
      </Row>
    </DatatableWrapper>
  );
}
