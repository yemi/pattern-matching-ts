import { left } from 'fp-ts/TaskEither'
import { run } from './run'

const main = left(new Error('"npm publish" can not be run from root, run "yarn release" instead'))

run(main)
