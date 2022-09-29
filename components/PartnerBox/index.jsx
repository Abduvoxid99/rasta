export function PartnerBox({
  elements,
  title = 'Партнерам Rasta',
  className = '',
}) {
  return (
    <div className='container'>
      <div className={`py-[24px] sm:py-[120px] ${className}`}>
        <p className='text-[40px] leading-[50px] font-bold text-center'>
          {title}
        </p>
        <div className='grid grid-cols-12 gap-[30px] mt-[40px]'>
          {elements?.map((item) => (
            <div
              className='col-span-12 sm:col-span-4 bg-[#F6F8F9] rounded-[16px] flex items-center flex-col py-[26px] sm:py-[32px]'
              key={item.id}
            >
              <img
                src={item.img}
                alt='part 1'
                className='h-[80px] sm:h-auto sm:w-[85px]'
              />
              <p className='text-[24px] leading-[28px] mt-[20px]'>
                {item.title}
              </p>
            </div>
          ))}

          {/* <div className='col-span-4 bg-[#F6F8F9] rounded-[16px] flex items-center flex-col py-[32px]'>
            <img src='/images/part2.png' alt='part 1' className='w-[85px]' />
            <p className='text-[24px] leading-[28px] mt-[20px]'>Рост продаж</p>
          </div>
          <div className='col-span-4 bg-[#F6F8F9] rounded-[16px] flex items-center flex-col py-[32px]'>
            <img src='/images/part3.png' alt='part 1' className='w-[85px]' />
            <p className='text-[24px] leading-[28px] mt-[20px]'>
              Готовый канал продаж
            </p>
          </div> */}
        </div>
      </div>
    </div>
  )
}
