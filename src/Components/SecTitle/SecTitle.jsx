

const SecTitle = ({ subHeading, heading }) => {
    return (
        <section className=' text-center my-10 md:max-w-sm md:mx-auto'>
            <p className='text-yellow-200 border-b-4 border-gray-400 py-4'>{subHeading}</p>
            <h3 className='text-3xl border-b-4 border-gray-400 py-4'>{heading}</h3>
        </section>
    )
};

export default SecTitle;