import { useState } from "react";

export const DynamicTable = () => {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [savedRows, setSavedRows] = useState(0);
  const [savedColumns, setSavedColumns] = useState(0);
  const [showTable, setShowTable] = useState(false);

  const handleRowsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRows(parseInt(e.target.value));
  };

  const handleColumnsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColumns(parseInt(e.target.value));
  };

  const handleSave = () => {
    setSavedRows(rows);
    setSavedColumns(columns);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowTable(true);
  };

  const handleClear = () => {
    setShowTable(false);
    setRows(0);
    setColumns(0);
    setSavedRows(0);
    setSavedColumns(0);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <label className="block text-gray-700">Nombre de Lignes:</label>
          <input
            type="number"
            min="1"
            value={rows}
            onChange={handleRowsChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Nombre de Colonnes:</label>
          <input
            type="number"
            min="1"
            value={columns}
            onChange={handleColumnsChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Générer le Tableau
        </button>
        {/* Bouton pour effacer le tableau */}
        {showTable && (
          <button
            type="button"
            onClick={handleClear}
            className="ml-2 px-4 py-2 bg-red-500 text-white rounded-md"
          >
            Effacer le Tableau
          </button>
        )}
      </form>

      {showTable && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                {[...Array(savedColumns)].map((_, colIndex) => (
                  <th
                    key={colIndex}
                    className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Colonne {colIndex + 1}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[...Array(savedRows)].map((_, rowIndex) => (
                <tr key={rowIndex} className="bg-white">
                  {[...Array(savedColumns)].map((_, colIndex) => (
                    <td
                      key={colIndex}
                      className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700"
                    >
                      Cellule {rowIndex + 1},{colIndex + 1}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
