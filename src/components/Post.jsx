import React from 'react'
import { getPostAtom } from '../lib/store'
import { useAtom } from 'jotai'

const Post = () => {
    const [data] = useAtom(getPostAtom);
  return (
    <div>
        {
            data.map((item,id) =>(
                <div key={id} className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{item.title}</h2>
                        <p>{item.body}</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Read Now</button>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Post