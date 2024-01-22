

function Body() {
    return (
      <div>
          <div className='flex flex-col my-10 ml-10'>
          <button className='bg-blue-600 py-2 text-white rounded-md w-40'>Button One</button>
        </div>
  
        <div className='bg-red-100 border-2 border-red-500 w-11/12 py-5 text-red-500  ml-10 px-3 rounded-md'>
          <p> <span className='text-red-600 font-bold px-3'>Alert!</span> This is awesome</p>
        </div>
  
        <div className='flex mt-5 items-center justify-center'>
            <div className='flex flex-col w-80 py-5 px-5 border-2 border-gray-200'>
                <img className='w-full h-20 object-contain mb-4' src="https://kalvium.community/images/sidebar-3d-logo.svg" alt="" />
                <div className="text-center">
                    <h1 className='text-3xl font-semibold'>Kalvium Store</h1>
                    <p className='text-gray-600 pt-2'>You have a new course!</p>
                </div>
            </div>
        </div>


      </div>
    )
  }
  
  export default Body