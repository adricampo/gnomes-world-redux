const url = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'

const dataResponse = async () => {

    try {
        const response = await fetch(url)
        const result = await response.json() 

        return result 

    } catch (error) {
        throw new Error ('something went wrong..')

    }
}

export {dataResponse}