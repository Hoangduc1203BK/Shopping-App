import { Table, Button} from "reactstrap";
import '../../styles/Styles/index.scss'
/**
 * @param {Array} headers
 * @param {Array} body
 * @param {Array} buttons {className, event, name, options }
 */
export const DataTable = (props) => {
    const { headers, body, parentCallBack, buttons,parentCallBackUpdate,noButton,noButton2,noButton3 } = props;

  const handleDeleteEvent = (id) => {
    parentCallBack(id);
  };

    const handleEvent = (id) => {
        buttons.event(id);
    }
    const OnClickUpdate=(id)=>{
    parentCallBackUpdate(id);
    }
   

    
    return (
        <div className="table-responsive min-h-85 df-h-30">
            <Table className="serviceListTable table-head-fixed" hover bordered striped>
                <thead>
                    <tr align="center">{headers.map(h => <th>{h}</th>)}</tr>
                </thead>
                <tbody>
                    {body.map((data, index) => {
                        return (
                            <tr key={data.id}>
                                {Object.keys(data, index).filter(d => d !== "id" && d !== "ctime").map(str => data[str]).map((dt, i, array) => {
                                    return i === +0 ?
                                        <th scope="row">{dt}</th> :
                                        i === array.length - 1 ?
                                            <td className="text-center">
                                               {!noButton2&& <Button
                                                    color="primary"
                                                    onClick={() =>OnClickUpdate(data.id)}
                                                >Sửa</Button>} &nbsp;
                                               {noButton3&& <Button
                                                    color="primary"
                                                    onClick={() =>OnClickUpdate(data.id)}
                                                >Xem</Button>} &nbsp;
                                               {!noButton&& <Button
                                                    color="danger"
                                                    onClick={() => handleDeleteEvent(data.id)}
                                                >Xóa</Button>} &nbsp;
                                                {buttons && buttons.options ?
                                                    <Button
                                                        color="primary"
                                                        onClick={() => handleEvent(data.id)}
                                                    >{buttons.name}</Button> : null
                                                }
                                            </td> : <td>{dt}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}