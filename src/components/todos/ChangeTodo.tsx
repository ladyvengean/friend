import Form from "../form/Form"
import Button from "../button/Button"
import Input from "../input/Input"
import * as actions from "@/actions";
import { todoProps } from "@/types";
import { FaCheck} from "react-icons/fa";



const ChangeTodo = ({todo} : {todo: todoProps}) => {
  return (
    <Form action={actions.changeStatus}>
        <Input name="inputId" value={todo.id} type= "hidden"></Input>
        <Button text={<FaCheck/>}
        type="submit"
        actionButton bgColor={todo.isCompleted? 'bg-green-400' : 'bg-blue-400'}
        ></Button>
    </Form>
  )
}

export default ChangeTodo
