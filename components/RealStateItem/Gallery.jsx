import ImageContainer from './ImageContainer'
import EmptyEstate from './EmptyEstate'
import RealImage from './RealImage';
const Gallery = ({images}) => {
    let imagesComponents;
    if (images.length === 0) {
        return (
            <ImageContainer>
                <EmptyEstate/>
            </ImageContainer>

        )        
    }
    switch (images.length) {
        case 1:
            imagesComponents = (
                <ImageContainer>
                    <RealImage image={images[0]} left="left-0" zindex="z-10" width="w-full"/>
                </ImageContainer>
            )
            break
        case 2:
            imagesComponents = (
                <ImageContainer>
                    <RealImage width="w-2/3" image={images[0]} left="left-0" zindex="z-20"/>
                    <RealImage width="w-full" image={images[1]} left="left-0" zindex="z-10"/>
                </ImageContainer>
            )
            break
        case 3:
            imagesComponents = (
                <ImageContainer>
                    <RealImage width="w-2/3" image={images[0]} left="left-0" zindex="z-30"/>
                    <RealImage width="w-5/6" image={images[1]} left="left-0" zindex="z-20"/>
                    <RealImage width="w-full" image={images[2]} left="left-0" zindex="z-10"/>
                </ImageContainer>
            )
            break     
        default:
            imagesComponents = (
                <ImageContainer>
                    <RealImage width="w-2/3" image={images[0]} left="left-0" zindex="z-30"/>
                    <RealImage width="w-5/6" image={images[1]} left="left-0" zindex="z-20"/>
                    <RealImage width="w-full" image={images[2]} left="left-0" zindex="z-10" more={true} amount={images.length -3}/>
                </ImageContainer>
            )
            break;
    }    
    return imagesComponents
    
}

export default Gallery;