import React, { useEffect, useState } from 'react' 
import { useNavigate, useParams } from 'react-router-dom'
import { catDelete, catShow, catUpdate } from '../api/cat'
import CatUpdate from './CatUpdate.js'

const CatShow = ({ user, msgAlert }) => {

    const [cat, setCat] = useState({})
    const [isUpdateShown, setIsUpdateShown] = useState(false)
    const [deleted, setDeleted] = useState(false)

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        catShow(user, id)
        .then((res) => {
            setCat(res.data.cat)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Show Cat Failure' + error,
                variant: 'danger'
            })
        })
    }, [])

    const toggleShowUpdate = () => {
        setIsUpdateShown(prevUpdateShown => !prevUpdateShown)
    }

    const handleChange = (event) => {
        // to keep the values as users input info 
        // first spread the current cat
        // then comma and modify the key to the value you need
        setCat({...cat, [event.target.name]: event.target.value})
    }

    const handleUpdateCat = () => {
        catUpdate(cat, user, id)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Updating Cat',
                variant: 'success'
            })
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Update Cat Failure' + error,
                variant: 'danger'
            })
        })
    }

    const handleDeleteCat = () => {        
        catDelete(user, id)    
        .then(() => { 
            setDeleted(true)          
            msgAlert({
                heading: 'Success',
                message: 'Deleted Cat',
                variant: 'success',
                    
            })            
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Delete Cat Failure' + error,
                variant: 'danger'
            })
        })     
    }
 
    // this is a oneliner
    if (deleted) navigate('/cats')    

    // logical &&
    // both sides of this check NEED to be truthy values = true
    // logical ||
    // only one side of this check needs to be truthy = true



    return (
			<>
				<h3>Name: {cat.name}</h3>
				<p>Type: {cat.type}</p>
                
				<button onClick={toggleShowUpdate}>Toggle Update</button>
				{isUpdateShown && (
					<CatUpdate
						cat={cat}
						handleChange={handleChange}
						handleUpdateCat={handleUpdateCat}
					/>                   
				)}
                <button onClick={handleDeleteCat}>Delete Cat</button>
			</>
		)
}

export default CatShow