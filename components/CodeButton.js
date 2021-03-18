import React from 'react';

function CodeButton({ href }) {
  return (
    <a
      className='group w-max mt-1 font-pop font-bold text-white-theme text-xl flex items-center transition-all hover:text-pink-theme'
      rel='external'
      href={href}
      target='_blank'
      rel='noopener'
    >
      <svg
        className='mr-2 fill-current text-white-theme transition-all group-hover:text-pink-theme'
        width='24'
        height='24'
        viewBox='0 0 30 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        alt='Github social link'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M15.039 0C6.7755 0 0.0780029 6.6975 0.0780029 14.961C0.0780029 21.57 4.3635 27.1785 10.3095 29.1585C11.058 29.2935 11.328 28.833 11.328 28.437C11.328 28.0815 11.316 27.1395 11.3115 25.893C7.149 26.796 6.27 23.886 6.27 23.886C5.592 22.158 4.6095 21.6975 4.6095 21.6975C3.252 20.769 4.713 20.79 4.713 20.79C6.216 20.895 7.0035 22.332 7.0035 22.332C8.3385 24.618 10.5075 23.958 11.3565 23.5755C11.493 22.608 11.883 21.948 12.309 21.5745C8.988 21.198 5.496 19.914 5.496 14.1795C5.496 12.549 6.0795 11.211 7.032 10.167C6.8805 9.7875 6.363 8.265 7.1805 6.207C7.1805 6.207 8.436 5.8035 11.2935 7.7385C12.5139 7.40651 13.7728 7.23704 15.0375 7.2345C16.3023 7.23655 17.5612 7.40602 18.7815 7.7385C21.6405 5.802 22.8945 6.207 22.8945 6.207C23.712 8.265 23.199 9.7875 23.043 10.167C24.003 11.211 24.579 12.5475 24.579 14.1795C24.579 19.929 21.084 21.192 17.751 21.5625C18.2835 22.0245 18.7635 22.9365 18.7635 24.3315C18.7635 26.3325 18.7455 27.9465 18.7455 28.437C18.7455 28.8375 19.0125 29.3025 19.776 29.1555C25.719 27.1725 30 21.5685 30 14.961C30 6.6975 23.3025 0 15.039 0Z'
        />
      </svg>
      View the code
    </a>
  );
}

export default CodeButton;