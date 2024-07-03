import React from 'react'
import img from './../assets/main.png'

const About = () => {
    return (
        <>
            <div className='pt-14 pl-28 pr-20 '>
                <h1 className='text-5xl font-semibold tracking-wide'>About Us</h1>
            </div>
            <div className="min-h-[85vh] flex items-center justify-center pt-4 pl-20 pr-20 pb-20 gap-10  ">
                <div className='min-w-[40vw] max-w-[40vw]    p-5'>
                    <div className='flex items-start justify-start w-full flex-col'>
                        <div className=''>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fringilla quam et urna faucibus, nec bibendum eros tincidunt. Sed auctor condimentum ligula, vitae interdum tortor ultricies id. Fusce placerat eros vitae massa pretium, vel mattis leo efficitur. Nullam id dolor euismod, venenatis nisi ac, consequat odio. Vivamus ac nisl id enim vestibulum sollicitudin. Sed id turpis sit amet justo eleifend hendrerit. Aliquam vel lobortis est. Morbi sed nulla nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus in sagittis velit, ac laoreet tortor. Nullam a ligula eu felis consectetur convallis a in nunc. Donec volutpat magna a tortor vehicula, in mattis metus lobortis. Integer sit amet magna vel enim egestas suscipit a eget lectus. Sed consequat maximus dui a tincidunt. Cras convallis felis sit amet justo tempus eleifend. Etiam nec ligula ac orci accumsan pretium.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='  max-w-[40vw] flex items-center justify-center'>
                    <img src={img} alt='logo-img' className=' max-w-[40vw]  p-5' />
                </div>
            </div>
        </>
    )
}

export default About