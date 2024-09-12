const data = [
    { name: 'John Doe', department: 'IT Department', type: 'Late', requestDate: '2023-05-01' },
    { name: 'John Smith', department: 'HR Department', type: 'Late', requestDate: '2023-05-01' },
    { name: 'John Smith', department: 'HR Department', type: 'Late', requestDate: '2023-05-01' },
    { name: 'John Smith', department: 'HR Department', type: 'Late', requestDate: '2023-05-01' },
    { name: 'John Smith', department: 'HR Department', type: 'Late', requestDate: '2023-05-01' },
    { name: 'John Smith', department: 'HR Department', type: 'Late', requestDate: '2023-05-01' },
    { name: 'John Smith', department: 'HR Department', type: 'Late', requestDate: '2023-05-01' },
    { name: 'John Smith', department: 'HR Department', type: 'Late', requestDate: '2023-05-01' },
    { name: 'John Smith', department: 'HR Department', type: 'Late', requestDate: '2023-05-01' },
    { name: 'John Smith', department: 'HR Department', type: 'Late', requestDate: '2023-05-01' },
    { name: 'John Smith', department: 'HR Department', type: 'Late', requestDate: '2023-05-01' },
];

const MyTable = () => (
    <>
        <table className="w-full table-fixed"> {/* Ensure both thead and tbody are in the same table */}
            <thead>
                <tr>
                    <th className="w-1/5 text-center border-b border-gray-700">Name</th>
                    <th className="w-1/5 text-center border-b border-gray-700">Department</th>
                    <th className="w-1/5 text-center border-b border-gray-700">Type</th>
                    <th className="w-1/5 text-center border-b border-gray-700">Request Date</th>
                    <th className="w-1/5 text-center border-b border-gray-700">Action</th>
                </tr>
            </thead>
            <tbody className="mx-auto w-full table-fixed font-sans text-xs font-normal font-inter">
            </tbody>
        </table>
    </>
);



export default MyTable;