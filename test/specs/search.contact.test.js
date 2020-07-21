const api = require('../client')

describe('GET contacts/search', () => {
    let res //variable to store request response 

    beforeAll(async ()=> {
        res = await api.get('contacts/search?order=asc&order_by=created_at&phone_number=+33652556756')
    })

    it('should return 200', () => {   
        expect(res.status).toEqual(200)        
    })
    it('should return at least one contact', () =>{
        expect(res.data.contacts.length).toBeGreaterThan(0)
    })
    it('should have correct phone number in list', () =>{
        expect(res.data.contacts[0].phone_numbers[0].value).toContain('+33652556756')
    })
    it('should return correct contact information', () =>{
        expect(res.data.contacts[0].id).not.toBeNull()
        expect(res.data.contacts[0].direct_link).not.toBeNull()
        expect(res.data.contacts[0].direct_link).not.toBe('')
    })

})

