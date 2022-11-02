import React, { useEffect, useState } from 'react' 
import { catIndex } from '../api/cat'
import {Link} from 'react-router-dom'
const CatIndex = ({ user, msgAlert }) => {

    const [allCats, setAllCats] = useState([])

    useEffect(() => {
        catIndex(user)
        .then(res => {
            setAllCats(res.data.cats)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Index Cats Failure' + error,
                variant: 'danger'
            })
        })
    }, [])

    const allCatsJSX = allCats.map(cat => {
        return (
            <Link to={`/cats/${cat._id}`} key={cat._id}>
            <li >Name: {cat.breed} type: {cat.furType} Average Life Span: {cat.averageLifeSpan}</li>            
            </Link>
        )
    })

    return (
        <>
            <ul>{allCatsJSX}</ul>
        </>
    )
}

export default CatIndex