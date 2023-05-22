import Checkbox from './Checkbox/Checkbox';
import ChooseOne from './ChooseOne/ChooseOne';
import  Form  from './Form';
import InputField from './InputField/InputField';
import Radio from './Radio/Radio';
import Range from './Range/Range';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Form',
  component: Form,
  tags: ['autodocs'],
  onClick: { action: 'clicked' }

};
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
//export const Basic = {
//  render: ()=><Form><InputField label={'name'} value={'Purnima'}/></Form>
//};

const MyForm =()=>{
  
const handleOptionSelect = (option) => {
  // Perform any other logic based on the selected option
};
  return(
    <>
    <Form.Group>
    <InputField  label={'name'} type="email" onChange={onchange}></InputField> 
    <Radio selectedOption={'large'} options={['small','large','med']} onChange={onchange}></Radio>
    </Form.Group>
    <Form.Group>
    <Range min={0} max={57}  onChange={onchange}></Range> 
    </Form.Group>
    <Form.Group>
    <Form.Label>User</Form.Label>
    <Checkbox checked={false} label={'name'} onChange={onchange}></Checkbox>
    <Checkbox checked={true} label={'email'} onChange={onchange}></Checkbox>

    </Form.Group>
    <Form.Group>
    <ChooseOne options={['S', 'M', 'L', 'XL']}></ChooseOne> 
    </Form.Group>
    </>
  )
}
export const Basic={

  args: {
    children:<MyForm/>
  },
}

