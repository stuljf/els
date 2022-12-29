export default function onClick(opt) {
    switch (opt) {
        case "left":
            console.log("left");
            let pos = this.state.pos;
            let dia = this.state.dia;
            let data = this.state.data;

            let showData = copyData(data);



            pos.y++;
            dia.forEach((a) => {
                let r = a.x + pos.x;
                let c = a.y + pos.y;
                showData[r][c].use = true;
            });
            this.setState({
                showData: showData
            })

            break;
        case "right":
            console.log("right");
            break;
        case "down":

            break;
        default:
            break;
    }
}

function copyData(data) {
    let copyData = [];
    data.forEach((row) => {
        let copyRow = [];
        row.forEach((col) => {
            let copyCol = Object.assign({}, col);
            copyRow.push(copyCol);
        })
        copyData.push(copyRow);
    });
    return copyData;
}