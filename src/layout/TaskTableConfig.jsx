export const taskTableColumns = [
    {
        id:'title',
        name:"Título",
        selector: row => row.title,
        sortable: true,
        width: '15%'
    },
    {
        id:'status',
        name:"Status",
        selector: row => row.status,
        sortable: true,
        width: '15%'
        
    },
    {
        id:'specification',
        name:"Descrição",
        selector: row => row.specification,
        sortable: true,
        width: '50%'
    },
    {
        id:'deadline',
        name:"Prazo",
        selector: row => row.deadline,
        sortable: true,
        width: '10%'
    },
]