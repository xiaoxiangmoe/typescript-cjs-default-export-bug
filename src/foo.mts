// file: src/foo.mts
import d, {a} from './a.cjs'
import * as m from './a.cjs'

// Property 'default' does not exist on type 'typeof import("/Users/me/repos/typescript-cjs-default-export-bug/src/a")'.
console.log(m.default)
export {d,a,m}