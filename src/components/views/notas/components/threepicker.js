import React from 'react'
// import 'rsuite/dist/styles/rsuite-default.css';
import { CheckTreePicker } from 'rsuite';
import { esES } from "rsuite/esm/locales";  
export default function ThreePicker() {
  
  // Sample Options
  const options = [
    {
      "label": "Promedio Final",
      "value": 1,
      "children": [
        {
          "label": "Conocimiento",
          "value": 2,
          "children": [
            {
              "label": "Parcial",
              "value": 6
            },
            {
              "label": "Final",
              "value": 7
            },
           
          ]
        },
        {
          "label": "Desempeño",
          "value": 3,
          "children": [
            {
              "label": "Práctica Clínica",
              "value": 4
            },
            {
              "label": "Promedio de talleres",
              "value": 5
            },
           
          ]
        },
      ]
    }
  ]
  
  return (
    <div style={{
      display: 'block',
    }}>
      <CheckTreePicker
        style={{ width: 300 }}
        defaultExpandAll
        placeholder="Seleccione evaluación"
        data={options}
        className="form-select-three"
        locale={{
            searchPlaceholder: 'Buscar',
            checkAll: 'Todos'
        }}
      />
    </div>
  );
}