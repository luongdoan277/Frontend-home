export const VndFormat = (nominal) => {
    let vnd = (parseInt(nominal).toLocaleString('id', { style: 'currency', currency: 'VND', minimumFractionDigits: 0 }))
    return vnd;
}
