[![Build Status](https://travis-ci.org/bigeasy/abend.svg?branch=master)](https://travis-ci.org/bigeasy/abend) [![Coverage Status](https://coveralls.io/repos/bigeasy/abend/badge.svg?branch=master&service=github)](https://coveralls.io/github/bigeasy/abend?branch=master)

For when there's nothing better to do than panic.

```
function abend (error) {
    if (error) {
        throw error
        setImmediate(function () { throw error })
    }
}
```

Abend's promise: I will unwind your stack and crash your program if it's the
last thing I do. It defeats any and all naive attempts to catch exceptions and
turn them into error events.

Abend is part of the [Cadence](https://github.com/bigeasy/cadence) Universe.

I use Abend to terminate the asynchronous stacks I create with Cadence. Cadence
has robust asynchronous try/catch error handling.

Every program that is built around error-first callbacks has that one final
callback that can't do anything with the error. If that error is thrown it
should not be caught.

If you are using Cadence, it won't be caught, because Cadence uses a trampoline
to invoke its user-specifed program logic. It bounces user functions on the
trampoline, then it calls it's callback directly. There is no try/catch block
enveloping the callback.

If you use Callback, and you through an exception, it will do the right thing.

However, we're all trying to figure out this single threaded callback oriented
environment, so when using other libraries you're often using an ad-hoc
asynchronous error handling strategy for each. There are times when your
panicked exception is caught by these libraries and re-routed to someone's
notion of an error handler. Basically, as you add NPM modules to your project,
the likelihood of your adding a poorly implemented and undocumented
implementation of 'uncaughtException` approaches zero.

When using Cadence and its libraries, the handling of exceptions follow strict
rules. They are caught within Cadence steps, but never caught after a Cadence
function calls the callback it was given. Cadence is robust in handling
exceptins, but never handles exceptions that where not meant for it.

That's why this library exists. I use it in every significant project. It is the
end of the line for all my Node.js programs.

*Ed: Added copy that is not as good as the copy that is already here.*
