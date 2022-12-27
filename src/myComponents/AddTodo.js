import React, { useState } from 'react'

export const AddTodo = (props) => {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    let submit = (e)=>{
        e.preventDefault()
        if(!title || !desc){
            alert("Either title or desc is blank! Correct It")
        }
        else{
            props.addTodo(title,desc)
            settitle("")
            setdesc("")

        }
    }
    return (
        <div className='container'>
            <h3 className='text-center my-2'>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(a)=>{settitle(a.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(a)=>{setdesc(a.target.value)}} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary bg-color-green">Add To</button>
            </form>
        </div>
    )
}
