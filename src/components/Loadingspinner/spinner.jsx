import './spinner.scss'
import PropTypes from 'prop-types';


const Spinner = ({color }) => {

    
    switch(color){
        case "primary": color='#5636FA'
                        break
        case "secondary": color='#2B10B4'
                        break
        case "success": color="#21E497"
                        break
        case "danger":color='#FF3869'
                        break
        case "warning":color='#FFBB40'
                        break
        case "dark":color='#010101'
                        break
        case 'light':color='#A2ABBC'
                        break
        default:
            color='#3498db'
    }

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

Spinner.PropTypes ={
    color:PropTypes.string
}

Spinner.defaultProps ={
    color:''

}
export default Spinner;
