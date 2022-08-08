const q = []

setInterval(() => {
  while (q.length) {
    q.pop()()
  }
}, 100).unref()

function later (f) {
  q.unshift(f)
}

module.exports = later
