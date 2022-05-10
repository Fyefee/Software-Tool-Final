import { 
    validateNameLead,
    validateFirstName,
    validateLastName,
    validatePersonalCard,
    validateCardNumber,
    validateBirthDate,
    validateLocation,
    validateProvince,
    validateDistrict,
    validateSubDistrict,
    validatePhoneNumber
} from '../lib/formValidation'

describe('Testing validate input namelead', () => {
    test('should namelead valid (pass case)', () => {
        const isValid = validateNameLead("นาย");
        expect(isValid).toBe(true);
    })

    test('should namelead valid (fail case)', () => {
        const isValid = validateNameLead("");
        expect(isValid).toBe(false);
    })
})

describe('Testing validate input firstname', () => {
    test('should firstname valid (pass case)', () => {
        const isValid = validateFirstName("นาย");
        expect(isValid).toBe(true);
    })

    test('should firstname valid (fail case)', () => {
        const isValid = validateFirstName("");
        expect(isValid).toBe(false);
    })
})

describe('Testing validate input lastname', () => {
    test('should lastname valid (pass case)', () => {
        const isValid = validateLastName("นาย");
        expect(isValid).toBe(true);
    })

    test('should lastname valid (fail case)', () => {
        const isValid = validateLastName("");
        expect(isValid).toBe(false);
    })
})

describe('Testing validate input personalCard', () => {
    test('should personalCard valid (pass case)', () => {
        const isValid = validatePersonalCard("นาย");
        expect(isValid).toBe(true);
    })

    test('should personalCard valid (fail case)', () => {
        const isValid = validatePersonalCard("");
        expect(isValid).toBe(false);
    })
})

describe('Testing validate input cardNumber', () => {
    test('should cardNumber valid (pass case)', () => {
        const isValid = validateCardNumber("นาย");
        expect(isValid).toBe(true);
    })

    test('should cardNumber valid (fail case)', () => {
        const isValid = validateCardNumber("");
        expect(isValid).toBe(false);
    })
})

describe('Testing validate input birthDate', () => {
    test('should birthDate valid (pass case)', () => {
        const isValid = validateBirthDate("นาย");
        expect(isValid).toBe(true);
    })

    test('should birthDate valid (fail case)', () => {
        const isValid = validateBirthDate("");
        expect(isValid).toBe(false);
    })
})

describe('Testing validate input location', () => {
    test('should location valid (pass case)', () => {
        const isValid = validateLocation("นาย");
        expect(isValid).toBe(true);
    })

    test('should location valid (fail case)', () => {
        const isValid = validateLocation("");
        expect(isValid).toBe(false);
    })
})

describe('Testing validate input province', () => {
    test('should province valid (pass case)', () => {
        const isValid = validateProvince("นาย");
        expect(isValid).toBe(true);
    })

    test('should province valid (fail case)', () => {
        const isValid = validateProvince("");
        expect(isValid).toBe(false);
    })
})

describe('Testing validate input district', () => {
    test('should district valid (pass case)', () => {
        const isValid = validateDistrict("นาย");
        expect(isValid).toBe(true);
    })

    test('should district valid (fail case)', () => {
        const isValid = validateDistrict("");
        expect(isValid).toBe(false);
    })
})

describe('Testing validate input subdistrict', () => {
    test('should subdistrict valid (pass case)', () => {
        const isValid = validateSubDistrict("นาย");
        expect(isValid).toBe(true);
    })

    test('should subdistrict valid (fail case)', () => {
        const isValid = validateSubDistrict("");
        expect(isValid).toBe(false);
    })
})
//d

describe('Testing validate input phonenumber', () => {
    test('should phonenumber valid (pass case)', () => {
        const isValid = validatePhoneNumber("นาย");
        expect(isValid).toBe(true);
    })

    test('should phonenumber valid (fail case)', () => {
        const isValid = validatePhoneNumber("");
        expect(isValid).toBe(false);
    })
})