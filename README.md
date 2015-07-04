# Abend

For when there's nothing better to do than panic.

```
function abend (error) {
    if (error) throw error
}
```

This is an essential function for error-frist callback programming.

I use a control-flow library that preserves try/catch semantics. I'm able to
catch exceptions and log them, or attempt to recover.

However, there always an outer-most function that gets the ball rolling. My
control-flow library will still catch exceptions and return them as errors to an
error-first callback, but there is nothing to be done. For these out most
functions I use `abend`.
