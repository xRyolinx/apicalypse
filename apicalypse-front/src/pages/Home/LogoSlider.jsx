import Slider from 'react-infinite-logo-slider'

const Component = () => {
    const images = import.meta.glob("/public/logoslider/*")

    return (
        <Slider
            width="250px"
            duration={40}
            pauseOnHover={false}
            blurBorders={false}
            blurBoderColor={'#fff'}
        >
            {
                Object.keys(images).map((image, i) => (
                    <Slider.Slide key={i}>
                        <img src={image.replace('/public', '')} alt="any" className='w-36' />
                    </Slider.Slide>
                ))
            }
        </Slider>
    )
}              
                     
export default Component