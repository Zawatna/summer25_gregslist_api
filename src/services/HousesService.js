import { dbContext } from "../db/DbContext.js"

class HousesService {
    async getHousesByQuery(query) {
        const sortBy = query.sort
        console.log('sort by', sortBy)
        delete query.sort


        const houses = await dbContext.Houses
            .find(query).sort(`${sortBy}`)

        return houses
    }

    async getHouseById(houseId) {
        const house = await dbContext.Houses.findById(houseId)
        return house
    }
    async getAllHouses(houseData) {
        const houses = await dbContext.Houses.find(houseData)
        return houses
    }

}

export const housesService = new HousesService()