const Constants =
{
    SERVER_PORT: 80,
    PROTOCOL: 'http',
}

let universe
try { universe = window } catch (error) { universe = global }
Object.keys(Constants).forEach(key => (universe[key] = Constants[key]))
