'use strict'

module.exports = (req, res, next) => {
  const _send = res.send;
  res.send = function (body) {
      try {
        const json = JSON.parse(body)
        if (Array.isArray(json)) {
          if (json.length === 1 && json[0].data) {
            // return _send.call(this, JSON.stringify(json[0].data))
              return res.status(200).send.call(this, JSON.stringify(json[0].data));
          } else if (json.length === 0) {
            // return _send.call(this, '{}', 404)
              return res.status(404).send.call(this, {});
          }
        }else{
            _send.call(this, body)
        }
      } catch (e) {}
  }
  next()
}
