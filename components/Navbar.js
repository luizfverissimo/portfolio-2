import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <header className='w-full max-w-screen-xl flex justify-between items-center py-6 px-6 xl:px-0'>
      <Link href="/">
      <a>
        <img
          src='/lf_verissimo_logo_dark.svg'
          className='w-1/2 sm:w-40 transform transition-all hover:-translate-y-1'
          alt='LF Verissimo logo'
        />
      </a>
      </Link>

      <div className='flex justify-center items-center'>
        <a  rel="external" href="https://github.com/luizfverissimo" target="_blank" rel="noopener">
          <svg
            className='ml-2 fill-current text-white-theme transition-all transform hover:text-pink-theme hover:-translate-y-1 '
            width='26'
            height='26'
            viewBox='0 0 30 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            alt='Github social link'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M15.039 0C6.7755 0 0.0780029 6.6975 0.0780029 14.961C0.0780029 21.57 4.3635 27.1785 10.3095 29.1585C11.058 29.2935 11.328 28.833 11.328 28.437C11.328 28.0815 11.316 27.1395 11.3115 25.893C7.149 26.796 6.27 23.886 6.27 23.886C5.592 22.158 4.6095 21.6975 4.6095 21.6975C3.252 20.769 4.713 20.79 4.713 20.79C6.216 20.895 7.0035 22.332 7.0035 22.332C8.3385 24.618 10.5075 23.958 11.3565 23.5755C11.493 22.608 11.883 21.948 12.309 21.5745C8.988 21.198 5.496 19.914 5.496 14.1795C5.496 12.549 6.0795 11.211 7.032 10.167C6.8805 9.7875 6.363 8.265 7.1805 6.207C7.1805 6.207 8.436 5.8035 11.2935 7.7385C12.5139 7.40651 13.7728 7.23704 15.0375 7.2345C16.3023 7.23655 17.5612 7.40602 18.7815 7.7385C21.6405 5.802 22.8945 6.207 22.8945 6.207C23.712 8.265 23.199 9.7875 23.043 10.167C24.003 11.211 24.579 12.5475 24.579 14.1795C24.579 19.929 21.084 21.192 17.751 21.5625C18.2835 22.0245 18.7635 22.9365 18.7635 24.3315C18.7635 26.3325 18.7455 27.9465 18.7455 28.437C18.7455 28.8375 19.0125 29.3025 19.776 29.1555C25.719 27.1725 30 21.5685 30 14.961C30 6.6975 23.3025 0 15.039 0Z'
            />
          </svg>
        </a>

        <a rel="external" href="https://www.linkedin.com/in/luiz-fernando-ver??ssimo-485323164/" target="_blank" rel="noopener">
        <svg
          className='ml-2 fill-current text-white-theme transition-all transform hover:text-pink-theme hover:-translate-y-1 '
          width='28'
          height='28'
          viewBox='0 0 36 36'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M30 4.5H6C5.60218 4.5 5.22064 4.65804 4.93934 4.93934C4.65804 5.22064 4.5 5.60218 4.5 6V30C4.5 30.3978 4.65804 30.7794 4.93934 31.0607C5.22064 31.342 5.60218 31.5 6 31.5H30C30.3978 31.5 30.7794 31.342 31.0607 31.0607C31.342 30.7794 31.5 30.3978 31.5 30V6C31.5 5.60218 31.342 5.22064 31.0607 4.93934C30.7794 4.65804 30.3978 4.5 30 4.5ZM12.5085 27.5055H8.5005V14.6205H12.5085V27.5055ZM10.5045 12.861C9.88867 12.861 9.29806 12.6164 8.8626 12.1809C8.42714 11.7454 8.1825 11.1548 8.1825 10.539C8.1825 9.92317 8.42714 9.33256 8.8626 8.8971C9.29806 8.46164 9.88867 8.217 10.5045 8.217C11.1203 8.217 11.7109 8.46164 12.1464 8.8971C12.5819 9.33256 12.8265 9.92317 12.8265 10.539C12.8265 11.1548 12.5819 11.7454 12.1464 12.1809C11.7109 12.6164 11.1203 12.861 10.5045 12.861ZM27.507 27.5055H23.5035V21.24C23.5035 19.746 23.4765 17.8245 21.4215 17.8245C19.3365 17.8245 19.02 19.4535 19.02 21.135V27.507H15.0195V14.622H18.8595V16.383H18.915C19.4475 15.3705 20.7555 14.3025 22.701 14.3025C26.757 14.3025 27.5055 16.9695 27.5055 20.4405V27.5055H27.507Z' />
        </svg>
        </a>

        <a rel="external" href="https://play.google.com/store/apps/developer?id=LF+Verissimo" target="_blank" rel="noopener">
        <svg
          className='ml-2 fill-current text-white-theme transition-all transform hover:text-pink-theme hover:-translate-y-1 '
          width='28'
          height='28'
          viewBox='0 0 36 36'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M19.431 17.424L23.8665 12.9885L9.54 4.93649C8.5905 4.42349 7.701 4.35149 6.921 4.91249L19.431 17.424ZM24.6225 22.617L29.2335 20.0235C30.1335 19.5195 30.627 18.8055 30.627 18.0135C30.627 17.223 30.1335 16.5075 29.235 16.0035L25.0605 13.659L20.361 18.357L24.6225 22.617ZM6.15 6.00299C6.054 6.29849 6 6.62849 6 6.98999V29.0475C6 29.619 6.126 30.111 6.354 30.5025L18.4995 18.3555L6.15 6.00299ZM19.431 19.2855L7.353 31.365C7.584 31.4535 7.833 31.5 8.0955 31.5C8.5635 31.5 9.051 31.362 9.5475 31.086L23.43 23.2905L19.431 19.2855Z' />
        </svg>
        </a>
      </div>
    </header>
  );
}

export default Navbar;
