const Constants =
{
    SERVER_DOMAIN: '35.197.137.94',
    SERVER_PORT: 80,
    PROTOCOL: 'http',
}

let universe
try { universe = window } catch (error) { universe = global }
Object.keys(Constants).forEach(key => (universe[key] = Constants[key]))
