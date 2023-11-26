
export const formatAsPesos = (amount) => {
    amount = isNaN(amount) ? 0 : amount;

    let pesoFormat = Intl.NumberFormat(
        'es-AR',
        {
            style: 'currency',
            currency: 'ARS'
        }
    )
    return pesoFormat.format(amount);
}