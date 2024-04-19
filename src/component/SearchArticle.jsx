import React,{ useState } from 'react'
import { useAppContext } from '../context/context'
function SearchArticle() {
    const {setSearch} = useAppContext()
    const [values, setValues] = useState({
        search: ''
    })

    const handleInput = (e) => {
        const {name,value} = e.target;
        setValues((prevState)=>({
            ...prevState,
            [name]:value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const encodedValue = encodeURIComponent(values.search)
        
        setSearch(encodedValue)
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        className='inputSearch'
        name='search'
        onChange={handleInput}
        value={values.search}
        />
        <button type='submit'>Buscar</button>
      </form>
    </div>
  )
}

export default SearchArticle
