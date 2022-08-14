## Base Strings
But first, lets talk about something I call "Base Strings"

Base Strings is possibly a new subject of mathematics, in which we speak of non-recurrent strings as a first class object. Its like trying to find the pattern of patterns by generating things that have no pattern.

So what i've come up with so far is the distinction between hard and soft base strings:
1. Hard base strings require that we never display a pattern in a string from one end to the next
2. Soft base strings require that we never display a recursive pattern from the left most charachter of the string.

#### Hard Base Strings
A good example of Hard Base Strings are pallindromes on alphabets. With the added caveat that the last letter in the alphabet is used once and all others are used twice.

The pallindrome base string set is when you find all the unique ordinal sets of the alphabet and construct the base pallindrome on the alphabet.

For example:
- abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba
- bacdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcab
- bcadefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedacb
...


#### Soft Base Strings
A good example of Soft Base Strings are simply strings that never recurse from the left most charachter. Lets use a binary base string as an example.
- 01001000100001000001

#### Why do Base Strings Matter at all?
- For one it would be interesting to find the pattern that explains all non-patterned behavior in a string or anything else.
- Thats about as powerful of a statement as we ever may conjure up in our imagination. But on a side note, we could use properties of Base Strings for other things in case we never achieved such an understanding. Relationships on a subset of base strings could end up proving useful.

## Why do Base Strings relate to Schema?
Schema uses a binary set for recursive operations '[' and '{', so it is related to Soft Binary Base Strings

The idea here is to do general things with schema, like:
1. schema validation (whether or not anything general can be done with it)
2. schema recursion (which is different than primitive recursion)
3. schema iteration (grabbing the next schema step over and over again)
4. schema interpretation (finding the most rational way to recurse with unknown schema)
5. schema statistics
6. base case recursion
7. schema interpolation (fixing broken schema with dummy schema steps you can skip over)
8. arbitrary base caseing for potentially infinitely or excessively deep recursable schema
9. schema abstraction
etc.
