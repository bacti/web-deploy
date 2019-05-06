const Constants =
{
    SERVER_DOMAIN: 'localhost',
    SERVER_PORT: 443,
    PROTOCOL: 'https',
}

let universe
try { universe = window } catch (error) { universe = global }
Object.keys(Constants).forEach(key => (universe[key] = Constants[key]))
