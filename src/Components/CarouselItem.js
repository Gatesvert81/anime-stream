import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import Image from 'next/image'

export default function CarouselItem({ item, show, active }) {
    const [play, setPlay] = useState(false)
    return (
        <AnimatePresence>
            {
                show && (
                    <motion.div
                        className='w-full h-full overflow-y-scroll relative'
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            zIndex: 20
                        }}
                        initial={{
                            x: "100%"
                        }}
                        animate={{
                            x: "0%",
                            scale: 1,
                            zIndex: 20
                        }}
                        exit={{
                            scale: 1.1,
                            zIndex: 10
                        }}
                        transition={{
                            default: {
                                duration: 1.2
                            }
                        }}
                    // onAnimationComplete={() => ({
                    //     zIndex: 10
                    // })}
                    >
                        <section className='w-full h-screen relative'>
                            <Image src={item?.images.webp.image_url} alt="Image" layout='fill' className='object-cover' />
                        </section>
                        <section className='bg-red-400 w-full h-70vh grid grid-cols-1 relative z-20 p-5' >
                            {/* <div className='w-full h-fit bg-blue-400' > */}
                            <div className='w-full h-full' >
                                <div className='w-40 h-52 relative' >
                                    <Image src={item?.images.webp.small_image_url} alt="Image" layout='fill' className='object-cover' />
                                </div>
                                <div>
                                    <div className='flex flex-col justify-end gap-20' >
                                        <div className="flex flex-col gap-3" >
                                            <div className="flex gap-3" >
                                                <div className='bg-blur' >
                                                    Adventure
                                                </div>
                                                <div className='bg-blur' >
                                                    Comedy
                                                </div>
                                            </div>
                                            <div>
                                                <motion.p className='large-text'
                                                    initial={{
                                                        y: "10%"
                                                    }}
                                                    animate={{
                                                        y: "0%"
                                                    }}
                                                    exit={{
                                                        y: "-10%"
                                                    }}
                                                >
                                                    Movi Title
                                                </motion.p>
                                            </div>
                                            <div>
                                                Apple tv
                                            </div>
                                            <div
                                                className='w-fit flex gap-2 items-center'
                                            >
                                                <button className='primary-btn' >
                                                    Love
                                                </button>
                                                <p className='small-text' >
                                                    Add to Favorite
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full flex justify-between items-end' >
                                <div className='w-40 h-40 bg-blur relative' >
                                    <button className='primary-btn absolute top-3 left-3'>
                                        p
                                    </button>
                                </div>
                            </div>
                        </section>
                        <AnimatePresence>
                            {(active && !play) && (
                                <div className='w-full h-full fixed z-20 top-0 left-0 bg-white/20 flex flex-col justify-end p-10 gap-5 '>
                                    <div className="w-24 h-24 bg-blur absolute top-1/3 left-1/3 z-30"
                                        onClick={() => setPlay(true)} >
                                        play
                                    </div>
                                    <div>
                                        Episodes
                                    </div>
                                    <div className='w-full h-30 relative flex overflow-x-auto space-x-2' >
                                        <div className='w-52 h-28 bg-blur flex-shrink-0' />
                                        <div className='w-52 h-28 bg-blur flex-shrink-0' />
                                        <div className='w-52 h-28 bg-blur flex-shrink-0' />
                                    </div>
                                </div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}