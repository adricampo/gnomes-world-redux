import retrieveGnome from './index'
import { NotFoundError } from '../../utils/errors'
require('dotenv').config()
const { expect } = require('chai')

describe('logic - retrieve gnome',  () => {
    it('should succeed if gnome exists', async () => { 
        const id = 0
        const gnome = await retrieveGnome(id) 

        expect(gnome.id).to.equal(0)
        expect(gnome.id).to.be.a('number')

    })

    it('should succed on receiving all the information correctly', async () => {
        const id = 0
        const gnome = await retrieveGnome(id)

        expect(gnome.id).to.equal(0)
        expect(gnome.id).to.be.a('number')

        expect(gnome.name).to.be.a('string')
        expect(gnome.name).to.equal('Tobus Quickwhistle')

        expect(gnome.age).to.be.a('number')
        expect(gnome.age).to.equal(306)

        expect(gnome.weight).to.be.a('number')
        expect(gnome.weight).to.equal(39.065952)

        expect(gnome.height).to.be.a('number')
        expect(gnome.height).to.equal(107.75835)

        expect(gnome.professions).to.be.a('array')
        expect(gnome.professions.length).to.equal(6)

        expect(gnome.friends).to.be.a('array')
        expect(gnome.friends.length).to.equal(2)

    })

    it('should fail if the id of the item is not found', async () => {
        const wrongId = 2312345
        
        try {
            await retrieveGnome(wrongId) 
            throw new Error('should not reach this point')

        } catch (error) {
            expect(error.message).to.equal('Gnome info not found')
            expect(error).to.be.an.instanceOf(NotFoundError)
        }

    })

})
