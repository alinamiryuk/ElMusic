import {useState} from 'react'

function useForm(initialState) {
  const [state, setState] = useState(initialState)

  function changeField(e) {
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value

    setState({...state, [name]: value})
  }

  return [state, changeField]
}


export default useForm
