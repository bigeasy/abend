# Abend

For when there's nothing better to do than panic.

```
function abend (error) {
    if (error) {
        setImmediate(function () { throw error })
    }
}
```

This is an essential function for error-frist callback programming.

The `abend` function will throw an error on the next tick. By throwing the error
outside of the stack that invoked it we can be certain that the error will not
be caught by any `catch` blocks, that it will create an uncaught exception and
terminate the program.
