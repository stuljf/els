import './App.css';
import React from "react";
import ShowPanel from './components/showPanel';
import OperatePanel from './components/operatePanel';
import onClick from './events/onClick';

class App extends React.Component {
  constructor(props){
    super(props);
    this.rowCount=10;
    this.colCount=10;
    let data=this.initData();
    this.state={
      dia:[{x:0,y:0},{x:0,y:1},{x:1,y:1},{x:1,y:2}],
      pos:{x:0,y:0},
      data:data,
      showData:data,
    }
  }

  initData(){
    let data=[];
    for(let i=0; i<this.rowCount; i++){
        let rowData=[];
        for(let j=0; j<this.colCount; j++){
            let dia={
                use:false
            }
            rowData.push(dia);
        }
        data.push(rowData);
    }
    return data;
  }

  render(){
    return (
      <div className="App">
        <ShowPanel showData={this.state.showData}></ShowPanel>
        <OperatePanel onClick={onClick.bind(this)}></OperatePanel>
      </div>
    );
  }

}

export default App;
