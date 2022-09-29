import useTranslation from 'next-translate/useTranslation'

export function CourierBox() {
  const { t } = useTranslation('common')

  return (
    <div className='bg-[#F6F8F9] py-[24px] sm:py-[40px]'>
      <div className='container'>
        <div className='sm:grid grid-cols-2 gap-[40px]'>
          <div>
            <p className='text-[32px] sm:text-[40px] font-[600] leading-[50px] mb-[44px]'>
              {t('be_courier')}
            </p>
            <div className='flex items-center mb-[34px]'>
              <div className='min-w-[40px] h-[40px] rounded-full bg-primary text-white flex justify-center items-center text-[20px] font-[500]'>
                1
              </div>
              <div className='ml-[25px]'>
                <p className='text-[20px] font-[500] mb-[6px]'>
                  {t('application')}
                </p>
                <p className='text-[16px] w-auto sm:w-[400px]'>
                  {t('press_button')}
                </p>
              </div>
            </div>
            <div className='flex items-center mb-[34px]'>
              <div className='min-w-[40px] h-[40px] rounded-full bg-primary text-white flex justify-center items-center text-[20px] font-[500]'>
                2
              </div>
              <div className='ml-[25px]'>
                <p className='text-[20px] font-[500] mb-[6px]'>
                  {t('wait_call')}
                </p>
                <p className='text-[16px] w-auto sm:w-[400px]'>
                  {t('press_button')}
                </p>
              </div>
            </div>
            <div className='flex items-center'>
              <div className='min-w-[40px] h-[40px] rounded-full bg-primary text-white flex justify-center items-center text-[20px] font-[500]'>
                3
              </div>
              <div className='ml-[25px]'>
                <p className='text-[20px] font-[500] mb-[6px]'>
                  {t('join_job')}
                </p>
                <p className='text-[16px] w-auto sm:w-[400px]'>
                  {t('press_button')}
                </p>
              </div>
            </div>
          </div>
          <div className='hidden sm:block'>
            <img
              src='/images/courier.jpg'
              alt='courier'
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
