export const LoginForm = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-700">
            <div className="flex flex-col justify-center items-center border border-solid border-white rounded-lg p-8 w-[400px] bg-white shadow-lg">
                <h1 className="text-center text-2xl font-semibold mb-4 text-black">Login Form</h1>
                <form className="flex flex-col w-full">
                    <label htmlFor="username" className="sr-only">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        placeholder="Username" 
                        className="mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                    />
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Password" 
                        className="mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                    />
                    <button type="submit" className="bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600">Login</button>
                </form>
            </div>
        </div>
    )
}
