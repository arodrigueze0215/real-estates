import Image from 'next/image'
import React from 'react';
const RealImage = (props) => {
    const { image, left, zindex, width, more, amount } = props
    return (
        <React.Fragment>
            <div className={`${width} h-full border border-white absolute ${left} ${zindex} bg-white rounded-xl`}>
                <div className="w-full h-full relative">
                    <Image className="border rounded-xl z-0" src={image} layout="fill" objectFit="cover"/>
                </div>
            </div>
            {more &&
                <div className={` w-full h-full border border-white rounded-xl bg-green-900 bg-opacity-70 z-10 absolute flex justify-end items-center pr-8`}>
                    <p className="text-white font-bold"> + {amount}</p>
                </div>
            }
        </React.Fragment>
    );
}

export default RealImage;