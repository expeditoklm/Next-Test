// components/Table.tsx
interface TableProps {
    nc: number;
    nl: number;
  }
  
  export const Table: React.FC<TableProps> = ({ nc, nl }) => {
    return (
      <table className="border-collapse border border-gray-400 w-full mt-4">
        <tbody>
          {Array.from({ length: nl }, (_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: nc }, (_, colIndex) => (
                <td key={colIndex} className="border border-gray-400 p-2">
                  Cellule {rowIndex + 1} * {colIndex + 1}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  