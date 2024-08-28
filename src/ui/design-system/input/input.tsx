// components/FormValidation.tsx
import { useState } from "react";
import { Loader } from "@/ui/design-system/loader/loader";

interface FormValidationProps {
  onSubmit: (nc: number, nl: number) => void;
}

export const Input: React.FC<FormValidationProps> = ({ onSubmit }) => {
  const [nc, setNc] = useState<string>("");
  const [nl, setNl] = useState<string>("");
  const [ncError, setNcError] = useState<string>("");
  const [nlError, setNlError] = useState<string>("");


  const [loading, setLoading] = useState(false);

  const handleValidation = () => {
    let valid = true;
    if (!/^\d+$/.test(nc)) {
      setNcError("Veuillez entrer un nombre entier.");
      valid = false;
    } else {
      setNcError("");
    }
    if (!/^\d+$/.test(nl)) {
      setNlError("Veuillez entrer un nombre entier.");
      valid = false;
    } else {
      setNlError("");
    }
    return valid;
  };
  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (handleValidation()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        onSubmit(parseInt(nc), parseInt(nl));
      }, 5000);
    }
  };
  
 

  return (
    <form onSubmit={handleSubmit} className="py-4 space-y-4">
      <div className="space-y-1">
        <label htmlFor="columns" className="block font-medium text-gray-700">
          Nombre de colonnes:
        </label>
        <input
          id="columns"
          type="text"
          value={nc}
          onChange={(e) => setNc(e.target.value)}
          onBlur={handleValidation}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {ncError && <p className="text-red text-sm">{ncError}</p>}
      </div>
      <div className="space-y-1">
        <label htmlFor="rows" className="block font-medium text-gray-700">
          Nombre de lignes:
        </label> 
        <input
          id="rows"
          type="text"
          value={nl}
          onChange={(e) => setNl(e.target.value)}
          onBlur={handleValidation}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {nlError && <p className="text-red text-sm">{nlError}</p>}
      </div>
      <button
         disabled={loading}
        type="submit"
        className="px-4 py-2 mt-4 text-white bg-primary-400 rounded hover:bg-blue-700"
      >
        {loading ? <Loader /> : "Valider"}
      </button>
    </form>
  );
  
}