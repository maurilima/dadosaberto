import React from 'react';
import DataTable from 'react-data-table-component';

import dataOrgao from '../../../../src/base'





const paginationOptions = {
    rowsPerPageText: 'Linhas por Página',
    rangeSeparatorText: 'de',
    selectAllRowsItemText: 'Todos',
    selectAllRowsItem: true
}
const columnsName = [
    {
        name: 'classificação',
        selector: 'classificacao',
        sortable: true,
        grow: 1
    },
    {
        name: 'Orgão',
        selector: 'orgao',
        sortable: true,
        // grow: 1
    },
    {
        name: 'Pedidos',
        selector: 'pedidos',
        sortable: true,
        // grow: 1
    },

]


function TableRaking() {
    return (
        <div className="RenderGridDiaria">
            <div className="table-responsive">
                <DataTable
                    columns={columnsName}
                    data={dataOrgao}
                    title='MAIS DEMANDADOS'
                    pagination
                    striped true
                    paginationComponentOptions={paginationOptions}
                    fixedHeader
                />
            </div>
        </div>
    )
}


export default TableRaking