// importo las 9 imagenes
import img1 from '../../Images/img-1.jpg';
import img2 from '../../Images/img-2.jpg';
import img3 from '../../Images/img-3.jpg';
import img4 from '../../Images/img-4.jpg';
import img5 from '../../Images/img-5.jpg';
import img6 from '../../Images/img-6.jpg';
import img7 from '../../Images/img-7.jpg';
import img8 from '../../Images/img-8.jpg';
import img9 from '../../Images/img-9.jpg';

const Carousel = () => {
    // const images = [
    //     {
    //         src: "https://th.bing.com/th/id/OIP._SO3oRwv-4PRNKXsYqu89wAAAA?pid=ImgDet&rs=1",
    //         alt: "Image 1",
    //     },
    //     {
    //         src: "https://th.bing.com/th/id/R.831b4e521e64d2312dacca51b93319b2?rik=TYXRYTS4WlCj1Q&riu=http%3a%2f%2fwww.zooburza.eu%2fdata%2finzeraty%2f1401444491inzerat.jpg&ehk=ybFDdkwL94uasXGx%2faVWferxzEDVU8zKbp6W5DSNi%2bg%3d&risl=&pid=ImgRaw&r=0",
    //         alt: "Image 2",
    //     },
    //     {
    //         src: "https://example.com/image3.jpg",
    //         alt: "Image 3",
    //     },
    // ];

    return (
        <div id="wrapper"  className='flex justify-center items-center'>
            <div id="carousel" className='flex flex-row w-[100%]'>
                {/* agrego las 9 imagenes */}
                <img src={img1} alt="1" className='w-1/3 object-cover h-[340px]' />
                <img src={img2} alt="2" className='w-1/3 object-cover h-[340px]' />
                <img src={img3} alt="3" className='w-1/3 object-cover h-[340px]' />
                <img src={img4} alt="4" className='w-1/3 object-cover h-[340px]' />
                <img src={img5} alt="5" className='w-1/3 object-cover h-[340px]' />
                <img src={img6} alt="6" className='w-1/3 object-cover h-[340px]' />
                <img src={img7} alt="7" className='w-1/3 object-cover h-[340px]' />
                <img src={img8} alt="8" className='w-1/3 object-cover h-[340px]' />
                <img src={img9} alt="9" className='w-1/3 object-cover h-[340px]' />                
            </div>
        </div>
    );
};

export default Carousel;