//6.6 변수캡슐화 하기
import {defaultOwner} from './06_defaultOwner.js'
import assert from 'assert'
const owner1 = defaultOwner()
assert.equal('파울러', owner1.lastName, '처음값 확인')
const owner2 = defaultOwner()
owner2.lastName = '파슨스'
assert.equal('파울러', owner1.lastName, 'owner2를 변경한 후')


