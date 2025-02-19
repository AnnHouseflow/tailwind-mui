import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useMediaQuery } from '@mui/material';

const baseColumns = [
    { field: 'id', headerName: 'ID', flex: 0.5, minWidth: 10 },
    { field: 'firstName', headerName: '名字', flex: 1 },
    { field: 'lastName', headerName: '姓氏', flex: 1 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        flex: 0.5,
    },
    {
        field: 'fullName',
        headerName: '全名',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        flex: 1.5,
        valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function TableComponent() {
    const isMdScreen = useMediaQuery('(max-width:780px)');
    const columns = isMdScreen
        ? baseColumns.filter(col => col.field !== 'firstName' && col.field !== 'lastName')
        : baseColumns;


    return (
            <Paper sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    sx={{ border: 0 }}
                    paginationMode="server"
                    rowCount={rows.length}
                />
            </Paper>
    );
}
