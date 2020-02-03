import validate from '../../utils/validate'
const {dataResponse} = require('../../utils/fetch')

export default function (query, criteria) { 
    validate.string(query)
    validate.string(criteria)

    return (async () => {
        query = query.toUpperCase()
        const {Brastlewark} = await dataResponse()
        switch (criteria) { 
            case 'name': 
                return Brastlewark.filter(gnome => gnome.name.toUpperCase().includes(query)); 
            case 'age':
               return Brastlewark.filter(gnome => gnome.age.toString().toUpperCase().includes(query))   
            case 'hairColor':
                return Brastlewark.filter(gnome => gnome.hair_color.toUpperCase().includes(query))   
            default: 
                return Brastlewark.filter(gnome => {
                    return gnome.name.toUpperCase().includes(query) ||
                    gnome.age.toString().toUpperCase().includes(query) ||
                    gnome.hair_color.toUpperCase().includes(query)                       
                })
        }
    })()
}   