import React from 'react'

const signup = () => {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault();
  }



  return (
    <>

      <div className='w-full h-screen bg-white flex justify-center items-center'>
        <div className='w-1/2 h-2/3 bg-white rounded-md shadow-lg p-10'>

          <h1 className='text-3xl font-bold text-center'>Sign Up</h1>
          
          <form onSubmit={handleSubmit}>
            <div className='mt-5'>
              <label className='block font-bold'>Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='input input-bordered w-full'
              />
            </div>
            <div className='mt-5'>
              <label className='block font-bold'>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='input input-bordered w-full'
              />
            </div>
            <div className='mt-5'>
              <label className='block font-bold'>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='input input-bordered w-full'
              />
            </div>
            <div className='mt-5'>
              <button
                type="submit"
                className='btn btn-primary w-full'
              >
                Sign Up
              </button>
            </div>
          </form>

        </div>
      </div>

    </>
  )
}

export default signup
