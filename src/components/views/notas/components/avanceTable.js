import Table from 'react-bootstrap/Table';

export default function AvanceTable() {
  return (
    <div className='table-schedule table-nota avance responsive table-responsive'>
       <Table striped bordered hover className='col-12' style={{width: "100%"}}>
      <thead className="table-light">
                   
                   <th  style={{textAlign: "left"}}>Nota / Evaluación</th>
                   <th  style={{textAlign: "left"}}>Fecha Programada de Evaluación</th>

                   <th  style={{textAlign: "left"}}>Fecha limite de la
                     Digitacion del Acta</th>
                   <th  style={{textAlign: "left"}}>Fecha Real
                     de Evaluación</th>

                   <th  style={{textAlign: "left"}}>Nueva Fecha Límite
                     de Digitación del Acta</th>
         
                   <th  style={{textAlign: "left"}}>Notas
                     registradas</th>
                   <th style={{textAlign: "left"}}>Fecha de
                     Digitación</th>
                  

                   
               </thead>
            <tbody>
           <tr>
            
           <th style={{textAlign: "left"}}>Sesión 1</th>
           <td  style={{textAlign: "left"}}>14/10/2022 </td>
           <td style={{textAlign: "left"}}>14/10/2022</td>
           <td style={{textAlign: "left"}}>18/08/2022</td>
           <td style={{textAlign: "left"}}>14/10/2022</td>
           <td style={{textAlign: "left"}}>14/10/2022</td>
           <td style={{textAlign: "left"}}><span className="activo">14/10/2022</span></td>
            
           
         </tr>
         <tr>
            
           <th style={{textAlign: "left"}}>Sesión 2</th>
           <td  style={{textAlign: "left"}}>14/10/2022 </td>
           <td style={{textAlign: "left"}}>14/10/2022</td>
           <td style={{textAlign: "left"}}>18/08/2022</td>
           <td style={{textAlign: "left"}}>14/10/2022</td>
           <td style={{textAlign: "left"}}>14/10/2022</td>
           <td style={{textAlign: "left"}}><span className="activo">14/10/2022</span></td>
            
           
         </tr>
         <tr>
            
           <th style={{textAlign: "left"}}>Sesión 3</th>
           <td  style={{textAlign: "left"}}>14/10/2022 </td>
           <td style={{textAlign: "left"}}>14/10/2022</td>
           <td style={{textAlign: "left"}}>18/08/2022</td>
           <td style={{textAlign: "left"}}>14/10/2022</td>
           <td style={{textAlign: "left"}}>14/10/2022</td>
           <td style={{textAlign: "left"}}><span className="activo">14/10/2022</span></td>
            
           
         </tr>
         <tr>
            
           <th style={{textAlign: "left"}}>Prac. Forense</th>
           <td  style={{textAlign: "left"}}>14/10/2022 </td>
           <td style={{textAlign: "left"}}>14/10/2022</td>
           <td style={{textAlign: "left"}}>18/08/2022</td>
           <td style={{textAlign: "left"}}>14/10/2022</td>
           <td style={{textAlign: "left"}}>14/10/2022</td>
           <td style={{textAlign: "left"}}><span className="activo">14/10/2022</span></td>
            
           
         </tr>
         
            </tbody>
    </Table>
    </div>
   
  );
}
