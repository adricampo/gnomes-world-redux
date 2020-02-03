import validate from '../../utils/validate'
const { dataResponse } = require('../../utils/fetch')
const { NotFoundError } = require('../../utils/errors')

export default function (id) { 
    validate.number(id)
    
    return (async () => { 
        const { Brastlewark } = await dataResponse()
        if (!Brastlewark[id]) throw new NotFoundError('Gnome info not found')

        return Brastlewark[id]
    })()
}   