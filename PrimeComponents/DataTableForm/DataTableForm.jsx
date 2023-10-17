"use client"
import React from "react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

export default function DataTableForm({
    products,
    actionBodyTemplate = null,
    actionBodyTemplate2 = null,
    actionBodyTemplate3 = null,
    actionBodyTemplate4 = null,
    actionBodyTemplate5 = null,
    rows = 10,
    dataKey = "id",
    TitleName = "Kardex",
    ColumnNameDataTable,
    onSelectionChange,
    selection,
    selectionMode = "single",
    showHeader = true,
    pagination = true,
    totalRecords,
    onPageChange
  }) {
    const dt = React.createRef();
    const [globalFilter, setGlobalFilter] = React.useState(null);
  
    const onPage = (event) => {
      if (onPageChange) {
        onPageChange(event.page + 1);
      }
    };

  return (
    <>
      {showHeader && (
        <div style={{ overflowX: "auto" }}>
          <DataTable
            ref={dt}
            value={products}
            dataKey={dataKey}
            paginator={pagination}
            rows={rows}
            totalRecords={totalRecords}
            onPage={onPage}
            className="datatable-horizontal-scroll"
            globalFilter={globalFilter}
         
            responsiveLayout="scroll"
            selection={selection}
            onSelectionChange={onSelectionChange}
            selectionMode={selectionMode}
          >
            {ColumnNameDataTable?.map((item, index) => {
              let name =
                item.NameColumn.charAt(0).toUpperCase() +
                item.NameColumn.slice(1).toLowerCase();
              return (
                <Column
                  key={index}
                  field={item.NameFilter}
                  header={name}
                  sortable
                  body={item.BodyColumn}
                  headerStyle={{
                    width: `${item.StyleWidthColumn}%`,
                  }}
                ></Column>
              );
            })}
            {actionBodyTemplate && <Column body={actionBodyTemplate}></Column>}
            {actionBodyTemplate2 && <Column body={actionBodyTemplate2}></Column>}
            {actionBodyTemplate3 && <Column body={actionBodyTemplate3}></Column>}
            {actionBodyTemplate4 && <Column body={actionBodyTemplate4}></Column>}
            {actionBodyTemplate5 && <Column body={actionBodyTemplate5}></Column>}
          </DataTable>
        </div>
      )}
      {!showHeader && (
        <div style={{ overflowX: "auto" }}>
          <DataTable
            ref={dt}
            value={products}
            dataKey={dataKey}
            paginator={pagination}
            rows={rows}
            totalRecords={totalRecords}
            onPage={onPage}
            className="datatable-horizontal-scroll"
            globalFilter={globalFilter}
            responsiveLayout="scroll"
            selection={selection}
            onSelectionChange={onSelectionChange}
            selectionMode={selectionMode}
          >
            {ColumnNameDataTable?.map((item, index) => {
              let name =
                item.NameColumn.charAt(0).toUpperCase() +
                item.NameColumn.slice(1).toLowerCase();
              return (
                <Column
                  key={index}
                  field={item.NameFilter}
                  header={name}
                  sortable
                  body={item.BodyColumn}
                  headerStyle={{
                    width: `${item.StyleWidthColumn}%`,
                  }}
                ></Column>
              );
            })}
            {actionBodyTemplate && <Column body={actionBodyTemplate}></Column>}
            {actionBodyTemplate2 && <Column body={actionBodyTemplate2}></Column>}
            {actionBodyTemplate3 && <Column body={actionBodyTemplate3}></Column>}
            {actionBodyTemplate4 && <Column body={actionBodyTemplate4}></Column>}
            {actionBodyTemplate5 && <Column body={actionBodyTemplate5}></Column>}
          </DataTable>
        </div>
      )}
    </>
  );
}
