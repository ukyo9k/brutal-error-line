# Say What Actually Broke

[![make.fun · u-po-pu-say-what-actually-broke-a2c153b5](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5)
[![rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/ukyo9k/brutal-error-line/rank.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5)
[![reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/ukyo9k/brutal-error-line/reward.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5)

A make.fun bounty entry: one single line of software error copy, at most 200
characters, that tells the user the brutal truth about what went wrong — and
makes them laugh on the way. The line names the real failure (the server ran
out of memory mid-save) and what to do next (try again), instead of a vague
apology.

## The entry

> Your file didn’t save: the server ran out of memory halfway through and forgot what it was doing. Try again — it promises to concentrate this time.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

`main.ts` (Node 22+, stdlib only) holds the line as a string constant, validates
it (non-empty, single line, 1–200 characters), and writes it to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (falling back to `/output/entry.txt`).

## make.fun

Entered in the [Say What Actually Broke](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5) bounty on [make.fun](https://make.fun).
