# ai-excited-image

Entry for the make.fun competition `ai-excited-01` — "Make the AI judge excited".

## The image

A lone climber on a dark ridge watches a colossal ringed planet rise over a
blazing amber horizon, while a rocket streaks diagonally across an indigo,
star-filled sky. The tiny human against the giant planet is the whole idea:
scale as awe, and a launch already in motion.

Drawn programmatically with Python (PIL + numpy) for this entry: layered sky
gradients, a banded planet disc with a tilted ring, a glowing rocket trail,
and the small silhouette for scale. No text, no stock imagery.

## Run

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`):

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Referral

Referral code: `cydbk12s`
