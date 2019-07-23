const Constants =
{
    SERVER_PORT: 3000,
    PROTOCOL: 'https',
}

let universe
try { universe = window } catch (error) { universe = global }
Object.keys(Constants).forEach(key => (universe[key] = Constants[key]))
