import React from 'react'
import { Link } from 'react-router-dom'

function CreatePassword() {
  return (
    <div>
      <Link to="/create_password" ><button className="text-white font-semibold text-xl px-5 py-5 border text-center rounded-full shadow-xl  hover:bg-primary-700 scale-105 transition-all active:bg-primary-500 active:transition-colors">Create password</button>
      </Link>
    </div>
  )
}

export default CreatePassword
