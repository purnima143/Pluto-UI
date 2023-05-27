import Spinner  from './spinner.jsx' 

export default {
    component: Spinner,
    title: 'Spinner',
    tags: ['autodocs'],
  };
  
  export const Default = {
    args: {
      color:'',
    },
  };

  export const primary ={
    args:{
        color:'#5636FA'
    }
  }

  export const secondary = {
    args:{
        color:'#2B10B4'
    }
  }

  export const success={
    args:{
        color:'#21E497'
    }
  }

  export const danger ={
    args:{
        color:'#FF3869'
    }
  }

  export const warning = {
    args:{
        color:'#FFBB40'
    }
  }

  export const dark ={
    args:{
        color:'#010101'
    }
  }

  export const light = {
    args:{
        color:'#A2ABBC'
    }
  }


