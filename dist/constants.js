const Constants =
{
    SERVER_DOMAIN: '35.197.137.94',
    SERVER_PORT: 443,
    PROTOCOL: 'https',
}

let universe
try { universe = window } catch (error) { universe = global }
Object.keys(Constants).forEach(key => (universe[key] = Constants[key]))
