/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * @param  {string}   name     the filename (basename) of the view to load.
 */
module.exports.asyncView = function (name) {
  return function (resolve) {
    require(['@/pages/' + name + '.vue'], resolve)
  }
}

/**
 * Asynchronously load component (Webpack Lazy loading compatible)
 * @param  {string}   name     the filename (basename) of the view to load.
 */
module.exports.asyncComponent = function (name) {
  return function (resolve) {
    require(['../components/' + name + '.vue'], resolve)
  }
}
