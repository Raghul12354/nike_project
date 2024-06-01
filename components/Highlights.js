import highlight from './datas.js/highlightsData'

const Highlights = () => {
    return (
        <div className='flex justify-around items-center py-11 relative lg:flex-row md:flex-col lg:mb-[6%] xl:mb-[6%] md:mb-[38%] sm:mb-[38%] mx-4 '>
            {highlight.map((item,index) => {
                const { heading, title, text, btn, img } = item;
                return (
                    <div key={index}>
                        <div>
                            <img className='lg:w-[350px] lg:h-[350px] object-cover absolute xl:left-16 lg:bottom-2 lg:left-12 transitions-theme hover:-rotate-[15deg] rotate-0 cursor-pointer md:-bottom-[140%] md:left-[28%] sm:left-[31%] md:w-[420px] md:h-[420px] sm:w-[300px] sm:h-[300px]' src={img} alt="" />
                        </div>
                        {/* Text */}
                        <div className='flex flex-col items-center lg:w-[50%] lg:text-left relative lg:ml-[50%] md:w-full md:ml-0 md:text-center sm:text-center'>
                            <h1 className='lg:text-4xl text-blue-500 font-bold uppercase absolute -top-9 lg:left-0 md:text-3xl sm:text-2xl md:left-[36%]'>{heading}</h1>
                            <h3 className='font-bold uppercase lg:text-5xl mb-4 md:text-4xl sm:text-3xl'>{title}</h3>
                            <p className='text-gray-500 lg:text-base font-medium mb-6 md:text-sm sm:text-xs'>{text}</p>
                            <button className='bg-black text-white px-4 py-2 rounded-md capitalize text-xl shadow-lg absolute top-[100%] lg:left-0 md:left-[39%]'>{btn}</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Highlights;
