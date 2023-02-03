import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { FaElementor } from "react-icons/fa";
const Table_Content = (props) => {
    const [show, setShow] = useState(true);
    const toggleMenu = (() => {
        // console.log("clicked");
        setShow((prev) => !prev);
    })
    return (
        <>
            <div className='w-full bg-gray-200'>
                {
                    show ? (<div className='flex justify-start w-96'>
                        <button className='text-3xl font-bold bg-slate-400 px-6 py-4'>Table Of contents</button>
                        <span className='p-2'><FaElementor onClick={toggleMenu} className='text-5xl bg-white' /></span>
                    </div>) : (
                        <>
                            <div className='flex justify-between'>
                                <button className='text-3xl font-bold hover:bg-slate-400 hover:mx-6 hover:my-2'>Table Of contents</button>
                                <span className='p-2'><FaElementor onClick={toggleMenu} className='text-2xl bg-white' /></span>
                            </div>
                            <nav>
                                <ol className="flex flex-col bg-gray-200 p-2">
                                    <li className='list-decimal list-inside'><Link href="#intro">Introduction</Link></li>
                                    <li className='list-decimal list-inside '>
                                        <Link href="#Legislations">Legislations governing patent infringement</Link>
                                        <ol className='ml-10'>
                                            <li className='list-decimal'><Link href="#Product">Product patent</Link></li>
                                            <li className='list-decimal'><Link href="#Compulsory">Compulsory licensing</Link></li>
                                            <li className='list-decimal'><Link href="#provisions">Other provisions</Link></li>

                                        </ol>
                                    </li>
                                    <li className='list-decimal list-inside'>
                                        <Link href="#infringement">Types of patent infringement</Link>
                                        <ol className='ml-10'>
                                            <li className='list-decimal'>
                                                <Link href="#Direct">Direct infringement</Link>
                                                <ol className='ml-10'>
                                                    <li className='list-decimal'><Link href="#Literal">Literal infringement</Link></li>
                                                    <li className='list-decimal'><Link href="#Non-literal">Non-literal infringement</Link></li>
                                                </ol>
                                            </li>
                                            <li className='list-decimal'><Link href="#Indirect">Indirect or induced infringement</Link></li>
                                            <li className='list-decimal'><Link href="#Contributory">Contributory infringement</Link></li>
                                            <li className='list-decimal'><Link href="#Willful">Willful infringement</Link></li>
                                        </ol>
                                    </li>
                                    <li className='list-decimal list-inside'>
                                        <Link href="#Doctrines">Doctrines related to patent infringement</Link>
                                        <ol className='ml-10'>
                                            <li className='list-decimal'><Link href="#Equivalents">Doctrine of Equivalents</Link> </li>
                                            <li className='list-decimal'><Link href="#Variation">Doctrine of Colourable Variation</Link></li>
                                        </ol>
                                    </li>
                                    <li className='list-decimal list-inside'>
                                        <Link href="#prevent">Ways to prevent patent infringement</Link>
                                        <ol className='ml-10'>
                                            <li className='list-decimal'><Link href="#Creation">Creation of original products</Link></li>
                                            <li className='list-decimal'><Link href="#licences">Obtaining appropriate licences from patent holders</Link></li>
                                        </ol>
                                    </li>
                                    <li className='list-decimal list-inside'>
                                        <Link href="#Patent">Patent infringement suit</Link>
                                        <ol className='ml-10 list-decimal'>
                                            <li><Link href="#Temporary">Temporary/Interlocutory injunction</Link></li>
                                            <li><Link href="#Permanent">Permanent injunction</Link></li>
                                            <li><Link href="#Damages">Damages</Link></li>
                                        </ol>
                                    </li>
                                    <li className='list-decimal list-inside'><Link href="#Defences">Defences available in a patent infringement suit</Link></li>
                                    <li className='list-decimal list-inside'><Link href="#amount">What does not amount to infringement</Link></li>
                                    <li className='list-decimal list-inside'>
                                        <Link href="#Landmark">Landmark judgements</Link>
                                        <ol className='ml-10 list-decimal'>
                                            <li><Link href="#">Bajaj Auto Limited vs TVS Motor Company Limited JT 2009 (12) SC 103</Link></li>
                                            <li><Link href="#">Novartis vs Union of India (2013) 6 SCC 1</Link></li>
                                            <li><Link href="#">F. Hoffmann-La Roche Ltd vs Cipla Ltd., Mumbai Central</Link></li>
                                            <li><Link href="#">Dr Snehlata C. Gupte vs Union of India & Ors (W.P. (C) No 3516 and 3517 of 2007) Delhi</Link></li>
                                        </ol>
                                    </li>
                                    <li className='list-decimal list-inside'><Link href="#Conclusion">Conclusion</Link></li>
                                    <li className='list-decimal list-inside'><Link href="#References">References</Link></li>
                                </ol>
                            </nav>
                        </>
                    )
                }
            </div>
        </>
    )
}

export default Table_Content