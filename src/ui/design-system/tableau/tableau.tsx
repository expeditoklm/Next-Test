interface Props {
    columns: string[];
    data: Array<{ [key: string]: any }>;
  }
  
  export const Tableau = ({ columns, data }: Props) => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column}
                  className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="bg-white">
                {columns.map((column) => (
                  <td
                    key={column}
                    className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700"
                  >
                    {row[column]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  