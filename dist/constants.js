const Constants =
{
    SERVER_DOMAIN: '34.65.56.126',
    SERVER_PORT: 80,
    PROTOCOL: 'http',
}

let universe
try { universe = window } catch (error) { universe = global }
Object.keys(Constants).forEach(key => (universe[key] = Constants[key]))
