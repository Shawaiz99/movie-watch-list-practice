export const isValidTitle = (value) => {
    console.log('Validating Title', value) 
    return value.trim() !== '' && value.trim().length >= 3;
}

export const isValidRate = (value) => {
    console.log('Validating Rate', value)
    const rate = Number(value);
    return value !== '' && !isNaN(rate) && rate >= 1 && rate <= 10;
}