import Link from 'next/link'
import Image from 'next/image'

const NotFound =() => {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-blue-100 text-center">
                <div className="p-8 bg-white rounded-lg shadow-lg mx-auto">
                    <h1 className="text-6xl font-bold text-red-500">Oops!</h1>
                    <p className="mt-4 text-xl text-gray-700">We can't find the page you're looking for.</p>
                    <p className="mt-2 text-lg text-gray-500">It might have slipped away...</p>
                    <div className="mt-6">
                        <Link href="/dashboard" className="inline-block px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600">
                            Go back Home
                        </Link>
                    </div>
                    <div className="mt-8">
                        <Image
                            src={'/assets/404_not_found.png'}
                            layout={'responsive'}
                            height={175}
                            width={175}
                            alt={`A cute animal!`}
                            unoptimized={true}
                            className='rounded-lg'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound