
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



const MyTableRow = () => (
    <>
        {data.length > 0 && data.map((item, index) => (
            <tr key={index}>
                <td className="py-3 px-4 text-center">{item.name || 'N/A'}</td>
                <td className="py-3 px-4 text-center">{item.department || 'N/A'}</td>
                <td className="py-3 px-4 text-center">{item.type || 'N/A'}</td>
                <td className="py-3 px-4 text-center">{item.requestDate || 'N/A'}</td>
                <td className="py-3 px-4 text-center">
                    <a href="/not-found" className="text-blue-700" aria-label={`View details for ${item.name}`}>Details</a>
                </td>
            </tr>
        ))}
    </>
);

export default MyTableRow;