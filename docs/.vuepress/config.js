// const fs = require('fs');
// const path = require('path');

// var dirpath = "./docs"

// // generate sidenav order by update time
// var sb = fs.readdirSync(dirpath).filter(f => {
//   return f.match(/\.(md)$/i) && f !== 'README.md'
// }).map(f => {
//   return {
//     path: '/' + f,
//     mtime: fs.statSync(dirpath + '/' + f).mtime
//   }
// })
//   .sort((a, b) => a.mtime - b.mtime)
//   .map(f => f.path)

module.exports = {
  title: 'Vuepress Bones',
  description: 'A basic website layout for vuepress',
  themeConfig: {
    docsDir: 'docs',
    repo: 'bloycey/vuepress-bones',
    lastUpdated: 'Last Updated'
  }
}