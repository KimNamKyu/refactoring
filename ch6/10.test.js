import pkg from 'mocha'
import { assert } from 'chai'

const {it} = pkg
import {enrichReading} from './10.js'
import cloneDeep from "lodash/cloneDeep.js"

it('check reading unchanged', () => {
  const baseReading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 }
  const oracle = cloneDeep(baseReading);
  enrichReading(baseReading)
  assert.deepEqual(baseReading, oracle)
})