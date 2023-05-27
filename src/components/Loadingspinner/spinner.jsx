import './spinner.scss'

const Task = ({color }) => {

    const bordercolor ={
        borderTopColor:color
    }

    return (<>
    <div className="pluto--overlay">
      <div className="pluto--spinnercontainer">
        <div className="pluto--spinner" style={bordercolor}></div>
      </div>
    </div>
    </>  );
}
 
export default Task;