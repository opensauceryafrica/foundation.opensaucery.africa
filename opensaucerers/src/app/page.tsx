/* eslint-disable react/no-unescaped-entities */
import Header from '@/components /Header';
import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';

export default function Home() {
  return (
    <div className="">
      <Header />

      <div className=" grid grid-cols-3  max-h-[1200px] h-[720px] w-full bg-red-100 text-white">
        <div className="relative h-full">
          {' '}
          <div
            className="block  h-full w-full  bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/assets/Frame.png)' }}
          />
          {/* <div className="absolute bottom-14 px-8 text-xl">
            <div className="gap-4  grid">
              <div className="text-[45px]"> Grimoire 📖 </div>{' '}
              <div className="text-[15px]"> why exits opensaucerers</div>
            </div>
          </div> */}
        </div>{' '}
        <div className="h-full grid grid-rols-2">
          <div className="relative h-full">
            {' '}
            <div
              className="block  h-full w-full  bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url(/assets/frame2.png)' }}
            />{' '}
            {/* <div className="absolute bottom-8 px-8 text-xl">
              <div className="gap-4  grid">
                <div className="text-[30px]"> Regents ♟ </div>{' '}
                <div className="text-[10px] flex items-center  ">
                  {' '}
                  <div> The warlocks that don't sleep</div>{' '}
                  <div>
                    {' '}
                    <IoIosArrowForward size="15px" />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="relative h-full">
            {' '}
            <div
              className="block  h-full w-full  bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url(/assets/Frame3.png)' }}
            />{' '}
            {/* <div className="absolute bottom-8 px-8 text-xl">
              <div className="gap-4  grid">
                <div className="text-[30px]"> Conquests ⚔️ </div>{' '}
                <div className="text-[10px] flex items-center  ">
                  {' '}
                  <div> That we may all win </div>{' '}
                  <div>
                    {' '}
                    <IoIosArrowForward size="15px" />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>{' '}
        <div className="h-full grid grid-rols-2">
          <div className="relative h-full">
            {' '}
            <div
              className="block  h-full w-full  bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url(/assets/Frame4.png)' }}
            />{' '}
            {/* <div className="absolute bottom-8 px-8 text-xl">
              <div className="gap-4  grid">
                <div className="text-[30px]"> Coven 🕷 </div>{' '}
                <div className="text-[10px] flex items-center  ">
                  {' '}
                  <div> Who are the opensauceres</div>{' '}
                  <div>
                    {' '}
                    <IoIosArrowForward size="15px" />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="relative h-full">
            {' '}
            <div
              className="block  h-full w-full  bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url(/assets/Frame5.png)' }}
            />{' '}
            {/* <div className="absolute bottom-8 px-8 text-xl">
              <div className="gap-4  grid">
                <div className="text-[30px]"> Genie 🧞 </div>{' '}
                <div className="text-[10px] flex items-center  ">
                  {' '}
                  <div> What is it that you wish for ?</div>{' '}
                  <div>
                    {' '}
                    <IoIosArrowForward size="15px" />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>{' '}
      </div>
    </div>
  );
}
