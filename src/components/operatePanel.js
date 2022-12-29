import React from "react";


export default class OperatePanel extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let onClick=this.props.onClick;
        return <div>
            <button id="left" onClick={()=>onClick("left")}>left</button>
            <button id="right" onClick={()=>onClick("right")}>right</button>
            <button id="up">up</button>
            <button id="down">down</button>
            <button id="control">control</button>
        </div>
    }
}