import React from 'react'
import {useForm} from 'react-hook-form'

const Signup_for_contentpublisher = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const onFormSubmit=(data)=>{
        // e.PreventDefault()

        console.log(data)
        const formData=new FormData()
        formData.append('fullName',data.full_name);
        formData.append('email',data.email)
        formData.append('mobile',data.mobile)
        formData.append('password',data.password)

        fetch("http://127.0.0.1:5463/simply-counsel/content-publisher/",
        {
            method:'POST',
            body:formData
        }

        )
        .then((res)=>{
            res.json()
        })
        .then((result)=>{
            console.log("success"+result)
            alert("Registeration Succeed")

        })
        .catch((error)=>{
            console.log(error)
            alert("data not created due to invalid interpretaion")
        }
        )

        
    }

    return (
        <>
            <div className='w-full h-screen bg-sky-700 p-2 flex flex-col justify-center items-center gap-3'>
            <div className='text-white font-extrabold text-2xl  '>Connectify <span className='bg-white text-zinc-500 text-lg font-extrabold p-1'>india</span></div>
             <div className='text-white font-medium text-2xl  '>Make the most of your professional life</div>
                <div className=''>
                    <div className='w-[420px] h-[600px] bg-gray-100 shadow-md shadow-slate-900 p-5'>
                       <form onSubmit={ handleSubmit(onFormSubmit)} action="">
                        <div className='flex flex-col justify-start items-start'>
                        <div className='mb-3'>
                        <label htmlFor="">Full Name</label>
                        <div>
                        <input className='w-96 py-2 px-1' type="text" {...register("full_name",{required:true})}/> 
                         {errors.full_name &&<span className='text-red-600'>please fill student name</span>}
                        </div>   
                        </div>
                       <div className='mb-3'>
                       <label htmlFor="">Email</label>
                        <div>
                        <input className='w-96 py-2 px-1' type="text" {...register("email",{required:true})}/>
                        {errors.email &&<span className='text-red-600'>Email is required</span>}

                        </div>
                       </div>
                        <div className='mb-3'>
                        <label htmlFor="">Mobile</label>
                        <div>
                        <input className='w-96 py-2 px-1' type="number" {...register("mobile",{required:true,maxLength:12})}/>
                        {errors.mobile &&<span className='text-red-600'>mobile no. required and length must be 10 character</span>}

                        </div>
                        </div>
                        <div className='mb-3'>
                        <label htmlFor="">Password</label>
                        <div className=''>
                        <input className='w-96 py-2 px-1' type="text" {...register("password",{required:true,maxLength:20,minLength:6})}/>
                        {errors.password &&<span className='text-red-600'>password required and min length 6 character</span>}

                        </div> 
                        </div>
                        <div className='text-slate-400'>By clicking join now,you agree to Connectifies <span className='text-black'>User Agreement Privacy Policy</span> and <span className='text-black'>Cookie Policy.</span></div>
                        </div>
                        <div>
                            <button   type='submit' className='bg-sky-700 px-5 py-1 text-white w-full text-lg mt-2'>Join now</button>
                        </div>
                        <hr className='w-full'/>
                       </form>      

                    </div> 
                </div>
 
            </div>
        </>
    )
}

export default Signup_for_contentpublisher