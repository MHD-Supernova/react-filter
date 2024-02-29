import React from 'react'
import './RepoDetail.css'



export default function RepoDetail() {
  return (
    <div>
        <div className="detail-main">
            <p>Repo full name</p>
            <p>Repo discription</p>
            <div className='quantities'>
                <span>140 stars</span>
                <span>40 Forks</span>
                <span>80 Open issues</span>
            </div>
        </div>
    </div>
  )
}
