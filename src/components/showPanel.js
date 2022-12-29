import React from "react";


export default class ShowPanel extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let data=this.props.showData;
        return <div>
            <table border="1">
                {data.map((row,rowIndex)=>{
                    return <tr id={rowIndex} key={rowIndex}>
                        {row.map((col,colIndex)=>{
                            let colId=rowIndex+"-"+colIndex;
                            return <td id={colId} key={colId}>{colId+","+col.use}</td>
                        })}
                    </tr>
                })}
            </table>
        </div>
    }
}