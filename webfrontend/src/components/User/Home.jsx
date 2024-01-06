    import React from 'react'
    import Dropdown from '../Helpers/Dropdown';
    import HomeImg from "../../assets/home.png";

    const Institute = [
        { label: 'institute 1' },
        { label: 'institute 2' },
        { label: 'institute 3' },
    ];
    const Role = [
        { label: 'Teacher' },
        { label: 'Student' },
        { label: 'Institute' },
    ];

    function Home() {
        return (
            <>
                <div className="w-full  bg-scroll flex bg-yellow-100 justify-between ">
                    <div className="bg-white mb-32 w-1/3 h-full p-8 ml-32 rounded-md shadow-md">
                        <h1 className='text-4xl font-bold flex flex-col items-center mb-10 font-serif text-violet-900'>Know about Your <span className='flex justify-center'> Kids</span></h1>
                        <form action="">
                            <div className="mb-4 flex justify-center">
                                <Dropdown links={Institute} dropDownName={'Institute'} />
                            </div>
                            <div className="mb-4 flex justify-center">
                                <Dropdown links={Role} dropDownName={'Role'} />
                            </div>
                            <div className="mb-4 ">
                                <label htmlFor="username" className='text-gray-700 text-lg font-bold mb-2 block'>User Id</label>
                                <input
                                    type="text"
                                    id="id"
                                    name="id"
                                    className="w-full border border-solid rounded-md p-3"
                                    placeholder="Enter your id"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700 text-lg font-bold mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="w-full border border-solid rounded-md p-3"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white text-2xl ml-12 w-3/4 py-1 px-20 rounded-full hover:bg-blue-900 transition duration-300"
                            >
                                Login
                            </button>
                            <h1 className='text-2xl font-bold flex justify-center '>OR</h1>
                            <button className='border bg-green-500 p-3 border-solid w-full rounded-full font-semibold font-serif text-2xl'>Register your institute</button>
                        </form>
                    </div>
                    <div className=" w-1/2">
                        <img src={HomeImg} alt="bgimg" className='h-full' />
                    </div>
                </div>
            </>
        )
    }

    export default Home
