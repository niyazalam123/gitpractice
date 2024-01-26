"use client";
import React from 'react';
import Image from 'next/image';

const AddToCart = () => {
    return (
        <>
        <style jsx>{`
        ._Addtcrt2 {
            display: flex;
            align-items: flex-start;
            background: #f1f3f6;
            padding: 12px 10px;
            width:100%;
            height:100vh;
        }
          ._Addtcrt3 {
            flex: 0 0 70%;
            width: 70%;
          }
          ._Addtcrt5 {
            font-size: 30px;
            font-weight: 600;
            margin-bottom: 18px;
            border-bottom: 1px dashed #ce282c87;
            padding-bottom: 6px;
          }
          ._Addtcrt7 {
            background: #fff;
            border-radius: 3px;
            margin-bottom: 20px;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            padding: 14px 10px;
          }
          ._Addtcrt8 {
            display: flex;
            align-items: flex-start;
          }
          ._Addtcrt9 {
            padding-right: 10px;
          }
          ._Addtcrt01 {
            position: relative;
            width: 200px;
            height: 180px;
          }
          ._Addtcrt02 {
            padding-right: 10px;
          }
          ._Addtcrt04 {
            display: flex;
            align-items: center;
            margin-bottom: 12px;
          }
          ._Addtcrt05 {
            position: relative;
          }
          ._Addtcrt05:first-child {
            flex: 0 0 39%;
            padding-right: 5px;
          }
          ._Addtcrt05 > h4 {
            color: #142b64;
            font-size: 17px;
            font-weight: 600;
            padding-bottom: 4px;
          }
          ._Addtcrt05 > span {
            display: inline-block;
            font-size: 15px;
            color: #333;
            font-weight: 500;
          }
          ._Addtcrt050 {
            position: relative;
          }
          ._Addtcrt053 {
            position: absolute;
            top: -18px;
            right: -22px;
            display: inline-block;
            width: 18px;
            height: 18px;
            background: rgba(60,64,67,.08);
            border-radius: 50%;
            text-align: center;
            line-height: 17px;
            font-size: 14px;
            cursor: pointer;
          }
          ._Addtcrt059 {
            position: absolute;
            background: #142b64;
            z-index: 999999999;
            left: 0;
            right: 0;
            width: 280px;
            border-radius: 3px;
            top: 3px;
            display:none;
          }
          ._Addtcrt053:hover + ._Addtcrt059{
            display:block;
          }
          ._Addtcrt055 {
            padding: 4px 4px;
          }
          ._Addtcrt057 {
            color: #fff;
            border-left: 1px solid #fff;
            padding: 6px;
            border-right: 1px solid #fff;
            border-top: 1px solid #fff;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          ._Addtcrt057 > span:first-child {
            font-size: 16px;
            font-weight: 500;
            width: 77px;
            display: inline-block;
          }
          ._Addtcrt057 > span:last-child {
            display: inline-block;
            font-size: 14px;
            font-weight: 500;
          }
          ._Addtcrt055 > li:last-child {
            border-bottom: 1px solid #fff;
          }
          ._Addtcrt07 {
            padding-bottom: 3px;
            display: inline-block;
            color: #142b64;
            font-size: 17px;
            font-weight: 600;
          }
          ._Addtcrt08 {
            display: flex;
            align-items: center;
          }
          ._Addtcrt08 > span:first-child {
            border-radius: 3px 0px 0px 3px;
          }
          ._Addtcrt08 > span {
            display: inline-block;
            width: 30px;
            border: 1px solid #142b64;
            cursor: pointer;
            text-align: center;
            height: 33px;
            line-height: 28px;
            font-size: 19px;
            background: #142b64;
            color: #fff;
          }
          ._Addtcrt08 > input {
            width: 56px;
            border-top: 1px solid #142b64;
            padding: 3px 6px;
            outline: none;
            border-bottom: 1px solid #142b64;
            border-left: none;
            border-right: none;
            height: 33px;
            text-align:center;
          }
          ._Addtcrt08 > span:last-child {
            border-radius: 0px 3px 3px 0px;
          }
          ._Addtcrt09 {
            background: transparent;
            border: 1px solid #142b64;
            padding: 7px 6px;
            border-radius: 3px;
            font-size: 14px;
            font-weight: 500;
          }
          ._Addtcrt081 {
            flex: 0 0 20%;
            margin-left: auto;
            height: 100%;
            background: #142b649c;
            border-radius: 3px;
          }
          ._Addtcrt082 {
            padding: 15px 7px 7px;
          }
          ._Addtcrt083 > li {
            margin-bottom: 16px;
          }
          ._Addtcrt051 {
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            background: #fff;
            border: none;
            padding: 6px 15px;
            width: 100%;
            border-radius: 3px;
            font-weight: 600;
            font-size: 15px;
            color: #142b64;
            cursor: pointer;
            margin-top: 24px;
            display: block;
          }
          ._Addtcrt083 > li > h4, ._Addtcrt083 > li > span {
            color: #fff !important;
          }
          ._Addtcrt101 {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          ._Addtcrt101 > button {
            border: none;
            background: #ce282c;
            color: #fff;
            font-size: 16px;
            padding: 8px 16px;
            font-weight: 500;
            border-radius: 3px;
            letter-spacing: .5px;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            cursor: pointer;
          }
        `}</style>
            <div className='_Addtcrt2'>
                <div className='_Addtcrt3'>
                    <div className='_Addtcrt4'>
                        <h2 className='_Addtcrt5'>Cart</h2>
                        <ul className='_Addtcrt6'>
                            <li className='_Addtcrt7'>
                                <div className='_Addtcrt8'>
                                    <div className='_Addtcrt9'>
                                        <div className='_Addtcrt01'>
                                            <Image
                                                src="/engine-image.jpg"
                                                fill
                                                alt="product image"
                                                style={{ objectFit: "cover" }}
                                            />
                                        </div>
                                    </div>
                                    <div className='_Addtcrt02'>
                                        <div className='_Addtcrt03'>
                                            <div className='_Addtcrt04'>
                                                <div className='_Addtcrt05'>
                                                    <h4>Part Type : </h4>
                                                    <span>Engine Assembly</span>
                                                </div>
                                                <div className='_Addtcrt05'>
                                                    <h4>Vehicle Information : </h4>
                                                    <span>2010 Mercedes Benz Maybach Gl...</span>
                                                    <div className='_Addtcrt050'>
                                                        <span className='_Addtcrt053'>i</span>
                                                        <div className='_Addtcrt059'>
                                                            <ul className='_Addtcrt055'>
                                                                <li className='_Addtcrt057'>
                                                                    <span>Make : </span>
                                                                    <span>Mercedes Benz</span>
                                                                </li>
                                                                <li className='_Addtcrt057'>
                                                                    <span>Model : </span>
                                                                    <span>Maybach Gls600</span>
                                                                </li>
                                                                <li className='_Addtcrt057'>
                                                                    <span>Year :</span>
                                                                    <span>2010</span>
                                                                </li>
                                                                <li className='_Addtcrt057'>
                                                                    <span>Options :</span>
                                                                    <span>4.0l V8 Turbocharged</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='_Addtcrt04'>
                                                <div className='_Addtcrt05'>
                                                    <h4>Mileage : </h4>
                                                    <span>106,750</span>
                                                </div>
                                                <div className='_Addtcrt05'>
                                                    <h4>Stock # : </h4>
                                                    <span>DMJ620</span>
                                                </div>
                                            </div>
                                            <div className='_Addtcrt04'>
                                                <div className='_Addtcrt05'>
                                                    <label htmlFor="_two" className='_Addtcrt07'>Quantity : </label>
                                                    <div className='_Addtcrt08'>
                                                        <span>-</span>
                                                        <input type="text" id="_two" value="2" />
                                                        <span>+</span>
                                                    </div>
                                                </div>
                                                <div className='_Addtcrt05'>
                                                    <label htmlFor="_one" className='_Addtcrt07'>Select Warranty : </label>
                                                    <select name="Warranty Type" id="_one" className='_Addtcrt09'>
                                                        <option value="90-Day Standard – Free">90-Day Standard – Free</option>
                                                        <option value="6 Mo. Extended – $396.00">6 Mo. Extended – $396.00</option>
                                                        <option value="12 Mo. Extended – $594.00">12 Mo. Extended – $594.00</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='_Addtcrt081'>
                                        <div className='_Addtcrt082'>
                                            <ul className='_Addtcrt083'>
                                                <li className='_Addtcrt05'>
                                                    <h4>Price : </h4>
                                                    <span>$1,980.00</span>
                                                </li>
                                                <li className='_Addtcrt05'>
                                                    <h4>Warranty Price : </h4>
                                                    <span>$1,98.00</span>
                                                </li>
                                            </ul>
                                            <button className='_Addtcrt051'>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='_Addtcrt101'>
                        <button>Continue Shopping</button>
                        <button>Checkout</button>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>Cart Summary</h2>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddToCart