const test = require('tape')
const color = require('../src/color')

test('toArray does nothing to existing arrays', (t) => {
  t.plan(1)
  const out = color.toArray([1, 2, 3])
  t.deepEqual(out, [1, 2, 3])
})

test('toArray converts rgb strings', (t) => {
  t.plan(1)
  const out = color.toArray('rgb(1, 2, 3)')
  t.deepEqual(out, [1, 2, 3])
})

test('toArray converts hex values', (t) => {
  t.plan(1)
  const out = color.toArray('#FF00FF')
  t.deepEqual(out, [255, 0, 255])
})

test('toArray converts color names', (t) => {
  t.plan(1)
  const out = color.toArray('darkseagreen')
  t.deepEqual(out, [143, 188, 143])
})

test('toRgb converts arrays', (t) => {
  t.plan(1)
  const out = color.toRgb([1, 2, 3])
  t.deepEqual(out, 'rgb(1, 2, 3)')
})

test('toRgb does nothing to rgb strings', (t) => {
  t.plan(1)
  const out = color.toRgb('rgb(1, 2, 3)')
  t.deepEqual(out, 'rgb(1, 2, 3)')
})

test('toRgb converts hex values', (t) => {
  t.plan(1)
  const out = color.toRgb('#FF00FF')
  t.deepEqual(out, 'rgb(255, 0, 255)')
})

test('toRgb converts color names', (t) => {
  t.plan(1)
  const out = color.toRgb('darkseagreen')
  t.deepEqual(out, 'rgb(143, 188, 143)')
})

test('toHex converts arrays', (t) => {
  t.plan(1)
  const out = color.toHex([1, 2, 3])
  t.deepEqual(out, '#010203')
})

test('toHex converts rgb strings', (t) => {
  t.plan(1)
  const out = color.toHex('rgb(1, 2, 3)')
  t.deepEqual(out, '#010203')
})

test('toHex does nothing to hex values', (t) => {
  t.plan(1)
  const out = color.toHex('#FF00FF')
  t.deepEqual(out, '#FF00FF')
})

test('toHex converts color names', (t) => {
  t.plan(1)
  const out = color.toHex('darkseagreen')
  t.deepEqual(out, '#8FBC8F')
})

test('toName converts arrays', (t) => {
  t.plan(1)
  const out = color.toName([143, 188, 143])
  t.deepEqual(out, 'darkseagreen')
})

test('toName converts rgb strings', (t) => {
  t.plan(1)
  const out = color.toName('rgb(143, 188, 143)')
  t.deepEqual(out, 'darkseagreen')
})

test('toName does nothing to hex values', (t) => {
  t.plan(1)
  const out = color.toName('#8FBC8F')
  t.deepEqual(out, 'darkseagreen')
})

test('toName converts color names', (t) => {
  t.plan(1)
  const out = color.toName('darkseagreen')
  t.deepEqual(out, 'darkseagreen')
})

test('toName returns false when not matched', (t) => {
  t.plan(1)
  const out = color.toName('doesnotexist')
  t.false(out)
})
