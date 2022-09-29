import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Link from 'next/link'
import Popover from '@mui/material/Popover'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Headroom from 'react-headroom'
import useTranslation from 'next-translate/useTranslation'
import MenuIcon from '@mui/icons-material/Menu'
import { Drawer } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'

export function Header() {
  const [anchorEl, setAnchorEl] = useState(null)
  const router = useRouter()
  const { t } = useTranslation('common')
  const [openModal, setOpenModal] = useState(false)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setOpenModal(open)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <>
      <Headroom>
        <header className='header'>
          <div className='container'>
            <div className='py-4 bg-white flex items-center justify-between'>
              <Link href='/'>
                <a>
                  <img
                    src='/logo.png'
                    alt='logo'
                    className='w-[110px] sm:w-auto sm:h-[50px]'
                  />
                </a>
              </Link>
              <div className='block sm:hidden' onClick={toggleDrawer(true)}>
                <MenuIcon fontSize='large' />
              </div>
              <div className='hidden sm:flex items-center '>
                <nav className='h-[48px]'>
                  <ul className='flex items-center gap-[48px] h-full'>
                    <li className='h-full'>
                      <Link href='/'>
                        <a
                          className={`text-[18px] leading-[22px] h-full flex items-center font-medium ${
                            router.pathname === '/' ? 'text-primary' : ''
                          }`}
                        >
                          {t('users')}
                        </a>
                      </Link>
                    </li>
                    <li className='h-full'>
                      <Link href='/courier'>
                        <a
                          className={`text-[18px] h-full flex items-center leading-[22px] font-medium ${
                            router.pathname === '/courier' ? 'text-primary' : ''
                          }`}
                        >
                          {t('become_courier')}
                        </a>
                      </Link>
                    </li>
                    <li className='h-full'>
                      <Link href='/partner'>
                        <a
                          className={`text-[18px] h-full flex items-center leading-[22px] font-medium ${
                            router.pathname === '/partner' ? 'text-primary' : ''
                          }`}
                        >
                          {t('become_partner')}
                        </a>
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div
                  className='flex items-center ml-[72px] p-[12px] bg-gray-100 rounded-[12px] cursor-pointer'
                  onClick={handleClick}
                >
                  <img
                    src={
                      router.locale === 'ru'
                        ? '/images/ru-lang.png'
                        : router.locale === 'uz'
                        ? '/images/uz-lang.png'
                        : '/images/en-lang.png'
                    }
                    alt='ru_lang'
                    className='w-[24px] h-[24px] object-cover'
                  />
                  <div className='ml-4'>
                    <KeyboardArrowDownIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </Headroom>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        classes={{ paper: 'lang-popover shadow-lg' }}
      >
        <div className='p-4'>
          <Link href={router.asPath} locale='ru'>
            <a
              onClick={() => {
                setAnchorEl(null)
                setOpenModal(false)
              }}
            >
              <div className='p-3 transition-all flex items-center cursor-pointer hover:bg-gray-100 rounded-[12px]'>
                <img
                  src='/images/ru-lang.png'
                  alt='ru lang'
                  className='w-[24px] h-[24px] object-cover'
                />
                <div className='ml-[8px] text-[17px] font-semibold'>
                  Русский
                </div>
              </div>
            </a>
          </Link>
          <Link href={router.asPath} locale='uz'>
            <a
              onClick={() => {
                setAnchorEl(null)
                setOpenModal(false)
              }}
            >
              <div className='p-3 transition-all flex items-center cursor-pointer hover:bg-gray-100 rounded-[12px]'>
                <img
                  src='/images/uz-lang.png'
                  alt='ru lang'
                  className='w-[24px] h-[24px] object-cover'
                />
                <div className='ml-[8px] text-[17px] font-semibold'>
                  O’zbekcha
                </div>
              </div>
            </a>
          </Link>
          <Link href={router.asPath} locale='en'>
            <a
              onClick={() => {
                setAnchorEl(null)
                setOpenModal(false)
              }}
            >
              <div className='p-3 transition-all flex items-center cursor-pointer hover:bg-gray-100 rounded-[12px]'>
                <img
                  src='/images/en-lang.png'
                  alt='en lang'
                  className='w-[24px] h-[24px] object-cover'
                />
                <div className='ml-[8px] text-[17px] font-semibold'>
                  English
                </div>
              </div>
            </a>
          </Link>
        </div>
      </Popover>
      <Drawer anchor={'right'} open={openModal} onClose={toggleDrawer(false)}>
        <div className='flex items-center justify-between p-4 border-b'>
          <Link href='/'>
            <a onClick={() => setOpenModal(false)}>
              <img
                src='/logo.png'
                alt='logo'
                className='w-[110px] sm:w-auto sm:h-[50px]'
              />
            </a>
          </Link>
          <ClearIcon onClick={toggleDrawer(false)} />
        </div>
        <div className='p-4'>
          <div
            className='flex items-center p-[12px] border rounded-[12px] cursor-pointer justify-between'
            onClick={handleClick}
          >
            <span className='text-[18px]'>
              {router.locale === 'ru'
                ? 'Русский'
                : router.locale === 'uz'
                ? 'O’zbekcha'
                : 'English'}
            </span>
            <div className='ml-4'>
              <KeyboardArrowDownIcon />
            </div>
          </div>
          <ul className='flex flex-col mt-4'>
            <li
              className={`p-4 text-[17px] rounded-[12px] leading-[22px] ${
                router.pathname === '/' ? 'bg-gray-100' : ''
              }`}
            >
              <Link href='/'>
                <a>{t('users')}</a>
              </Link>
            </li>
            <li
              className={`p-4 text-[17px] rounded-[12px] leading-[22px] ${
                router.pathname === '/courier' ? 'bg-gray-100' : ''
              }`}
            >
              <Link href='/courier'>
                <a>{t('become_courier')}</a>
              </Link>
            </li>
            <li
              className={`p-4 text-[17px] rounded-[12px] leading-[22px] ${
                router.pathname === '/partner' ? 'bg-gray-100' : ''
              }`}
            >
              <Link href='/partner'>
                <a>{t('become_partner')}</a>
              </Link>
            </li>
          </ul>
        </div>
      </Drawer>
    </>
  )
}
