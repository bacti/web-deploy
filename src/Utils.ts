export default
{
    // https://stackoverflow.com/questions/1073956/how-to-generate-63-million-prize-codes
    get uuid()
    {
        return [...Array(6)].reduce(code => code + '0123456789ABDEFGHJKLMNPRSTUVXYZ'[~~(Math.random() * 31)], '')
    }
}
