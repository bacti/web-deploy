const EventEmitter3 = require('eventemitter3')

export default class EventEmitter extends EventEmitter3
{
    on(event, fn, context = this)
    {
        if (this._events && this._events.params && this._events.params[event])
        {
            fn.apply(context, this._events.params[event])
        }
        return super.on(event, fn, context)
    }

    once(event, fn, context = this)
    {
        if (this._events && this._events.params && this._events.params[event])
        {
            fn.apply(context, this._events.params[event])
            return this
        }
        return super.once(event, fn, context)
    }

    emit(event, ... args)
    {
        if (!super.emit(event, ... args))
        {
            this._events = this._events || {}
            this._events[event] = []
        }
        this._events.params = this._events.params || {}
        this._events.params[event] = [...arguments].slice(1)
    }
}
