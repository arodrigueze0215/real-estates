export const filterIncludeRealEstates = (data, included) => {
    const realEstates = data.map((item) => {
      const imagesMap = new Array()
      for (const idItem of item.attributes.real_estate_ids) {
        const itemIncluded = included.find(realEstateIncluded => Number(realEstateIncluded.id) === idItem)
        for (const url of itemIncluded.attributes.gallery_urls) {
            imagesMap.push(url)
        }
      }
      item.imagesMap = imagesMap
      return item
    })
    return realEstates
  }