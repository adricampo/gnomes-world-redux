import searchGnomes from './index'
require('dotenv').config()
const { expect } = require('chai')

describe('logic search-gnomes', () => {
    it('if no query is given and no criteria selected, it should give all the results available in the array, searching in all the item parameters', async () => {
        const query = ''
        const criteria = 'none'

        const list = await searchGnomes(query, criteria)

        expect(list).to.be.instanceOf(Array)
        expect(list.length).to.equal(1337)
   
        list.forEach(item => {
            expect(item.name).to.be.a('string')
            expect(item.age).to.be.a('number')
            expect(item.hair_color).to.be.a('string')
            expect(item.id).to.be.a('number')
            expect(item.thumbnail).to.be.a('string')
        })
    })

    it('if criteria is name, it will show results only searching through the name property of the items', async () => {
        const query = 'tob'
        const criteria = 'name'

        const list = await searchGnomes(query, criteria)
        

        expect(list).to.be.instanceOf(Array)
        expect(list).to.have.length(69)


        list.forEach(item => {
            let element = item.name.toUpperCase()
            expect(element.includes(query.toUpperCase())).to.equal(true)
            expect(element).to.be.a('string')
        })
    })

    it('if criteria is age, it will show results only searching through the age property of the items', async () => {
        const query = '23'
        const criteria = 'age'

        const list = await searchGnomes(query, criteria)

        expect(list).to.be.instanceOf(Array)
        expect(list).to.have.length(57)
      

        list.forEach(item => {
            let element = item.age.toString().toUpperCase()
            expect(element.includes(query.toUpperCase())).to.equal(true)
            expect(element).to.be.a('string')
        })
    })

    it('if criteria is hairColor, it will show results only searching through the hairColor property of the items', async () => {
        const query = 'red'
        const criteria = 'hairColor'

        const list = await searchGnomes(query, criteria)

        expect(list).to.be.instanceOf(Array)
        expect(list).to.have.length(272)

        list.forEach(item => {
            let element = item.hair_color.toUpperCase()
            expect(element.includes(query.toUpperCase())).to.equal(true)
            expect(element).to.be.a('string')
        })
    })
    
})
