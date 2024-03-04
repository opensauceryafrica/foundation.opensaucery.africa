/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex fixed  py-3     w-full z-[200]   md:px-3">
        <div
          className=" px-2
          "
        >
          <Image
            src="/assets/svg/logo.svg"
            alt="Opensaucery"
            width={35}
            height={30}
            sizes="100vw"
            quality={100}
            style={{
              marginBottom: '',
              objectFit: 'cover',
            }}
          />
        </div>{' '}
        <div className="text-white py-1 text-[14px]">
          come let's do juju together
        </div>
      </div>
    </div>
  );
};

export default Header;
