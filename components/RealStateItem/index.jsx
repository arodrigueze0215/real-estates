import ImagesList from "./ImagesList"
const RealStateItem = (props) => {
    const { attributes, images } = props
    const { real_estate_ids } = attributes
    return (
        <article className="flex flex-col w-3/4">
            <ImagesList images={images}/>
            <h1 className="font-bold pt-4">{attributes.name}</h1>
            <span className="pt-3.5">{real_estate_ids.length} propiedades guardadas</span>
        </article>
    )
    
}
export default RealStateItem
