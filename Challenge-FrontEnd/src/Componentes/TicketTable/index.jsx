import Table from 'react-bootstrap/Table';
import './TicketTable.css';
import ticketsData from '../../dados/tickets_data.json';

function TicketTable() {

    return (
        <div className='caixaTabela'>
            <h3>Ticket List</h3>
            <Table responsive>

                <thead className='cabecalho'>
                    <tr >
                        <th>
                            Ticket ID
                        </th>
                        <th>
                            Status
                        </th>
                        <th>
                            Resolvido
                        </th>
                        <th>
                            Categoria
                        </th>
                        <th>
                            Descrição
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {ticketsData.map(ticket => (
                        <tr key={ticket.Num}>
                            <td>{ticket.Num}</td>
                            <td>{ticket.Estado}</td>
                            <td>{ticket.Resolvido}</td>
                            <td>{ticket.Categoria}</td>
                            <td>{ticket.Descricao}</td>
                        </tr>
                    ))}

                </tbody>

            </Table>

        </div>

    )

}

export default TicketTable